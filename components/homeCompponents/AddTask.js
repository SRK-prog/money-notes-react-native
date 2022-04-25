import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

function AddTask({addTaskHandler}) {
  const [showInputField, setShowInputField] = useState(false);
  const [inputData, setInputData] = useState('');

  const addTask = () => {
    if (inputData === '') {
      return;
    }
    addTaskHandler({
      title: inputData,
      star: false,
      createdAt: '21/02/2022',
      updatedAt: 'just now',
    });
    setInputData('');
    setShowInputField(false);
  };

  return (
    <View>
      {showInputField ? (
        <View style={styles.taskContainer}>
          <View style={styles.cancelBtn}>
            <Icon
              onPress={() => setShowInputField(false)}
              name="remove"
              size={15}
              color="#bfbbbb"
            />
          </View>
          <TextInput
            style={styles.input}
            value={inputData}
            onChangeText={setInputData}
            autoFocus
            placeholder="Add New..."
            onSubmitEditing={() => addTask()}
          />
          <Text onPress={() => addTask()} style={styles.createBtn}>
            Create
          </Text>
        </View>
      ) : (
        <TouchableOpacity
          style={styles.taskContainer}
          onPress={() => setShowInputField(true)}
          activeOpacity={0.4}>
          <Icon name="plus" size={15} color="#bfbbbb" />
          <Text style={styles.addText}>Add New</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  taskContainer: {
    backgroundColor: '#262626',
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 15,
    marginTop: 10,
    paddingHorizontal: 10,
  },
  addText: {
    color: '#bfbbbb',
    marginLeft: 10,
  },
  input: {
    height: 35,
    borderWidth: 1,
    padding: 5,
    width: '78%',
    borderRadius: 5,
    backgroundColor: 'white',
  },
  createBtn: {
    color: 'white',
    paddingHorizontal: 13,
    paddingVertical: 8,
  },
  cancelBtn: {
    paddingEnd: 8,
    paddingVertical: 9,
  },
});

export default AddTask;
