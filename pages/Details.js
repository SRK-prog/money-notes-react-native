import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import ValuePair from '../components/homeCompponents/details/valuePairs';

const data = [
  {
    amount: '12334',
    label: 'testing',
  },
  {
    amount: '445',
    label: 'test',
  },
  {
    amount: '12334',
    label: 'sample',
  },
  {
    amount: '9874',
    label: 'boring',
  },
];

function Details({route, navigation}) {
  const [addData, setAddData] = useState(data);
  const [input, setInputData] = useState('');

  const addHandler = () => {
    const newData = input?.split(' ');
    if (newData[0] && newData[1]) {
      try {
        var calculate = eval(newData[0]);
        setAddData([...addData, {amount: calculate, label: newData[1]}]);
        setInputData('');
      } catch {
        console.log('err');
      }
    }
  };

  return (
    <View style={styles.Container}>
      <Text style={styles.heading}>{route?.params?.id}</Text>
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
