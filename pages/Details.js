import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import ValuePair from '../components/homeCompponents/details/valuePairs';

function Details({route, navigation}) {
  const [addData, setAddData] = useState([]);
  const [input, setInputData] = useState('');

  useEffect(() => {
    (async () => {
      const data = await fetch("https://my-notepad-backend.herokuapp.com/notes?listId=" + route?.params?.id);
      const response = await data.json();
      setAddData(response);
    })()
  },[])

  const addHandler = async () => {
    const newData = input?.split(' ');
    if (newData[0] && newData[1]) {
      try {
        var calculate = eval(newData[0]);
        const body = {amount: calculate, label: newData[1], listId: route?.params?.id}
        setAddData([...addData, body]);
        setInputData('');
        const res = await fetch("https://my-notepad-backend.herokuapp.com/notes", {
            method: "POST",
            header: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
        })
      } catch(err) {
        console.log('err', err);
      }
    }
  };

  return (
    <View style={styles.Container}>
      <Text style={styles.heading}>{route?.params?.title}</Text>
      <View style={styles.itemsContainer}>
        <View style={styles.titles}>
          <Text style={styles.titleAmount}>Amount</Text>
          <Text style={styles.titleLabel}>Label</Text>
        </View>
        {addData?.map((item, index) => (
          <View key={index}>
            <ValuePair item={item} />
          </View>
        ))}
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputField}
          onChangeText={setInputData}
          value={input}
          onSubmitEditing={addHandler}
        />
        <View style={styles.inputBtn}>
          <Icon onPress={addHandler} name="ios-send" size={20} color="white" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    height: '100%',
    backgroundColor: '#333333',
    position: 'relative',
  },
  heading: {
    margin: 15,
    fontSize: 18,
    color: 'white',
  },
  titles: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  titleAmount: {
    color: 'white',
    fontSize: 16,
  },
  titleLabel: {
    color: 'white',
    fontSize: 16,
  },
  itemsContainer: {
    backgroundColor: '#7a7a7a',
    marginHorizontal: 15,
    minHeight: 300,
    maxHeight: 500,
    paddingVertical: 10,
    paddingHorizontal: 13,
    borderRadius: 5,
  },
  inputField: {
    backgroundColor: 'white',
    borderRadius: 5,
    marginEnd: 10,
    width: '85%',
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginHorizontal: 15,
    position: 'absolute',
    bottom: 20,
  },
  inputBtn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '13%',
    backgroundColor: '#242424',
    borderRadius: 5,
  },
});

export default Details;
