import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {useState} from 'react';

function Tasks({task, removeTaskhandler}) {
  const [stared, setStared] = useState(task?.star);
  const [showDelete, setShowDelete] = useState(false);
  const starHandler = () => {
    setStared(!stared);
    task['star'] = !task?.star;
  };

  return (
    <TouchableOpacity
      style={styles.taskContainer}
      onPress={() => console.log('press in parent')}
      onLongPress={() => setShowDelete(true)}
      activeOpacity={0.4}>
      <View style={styles.taskTitles}>
        <Text style={styles.taskTitle}>{task?.title}</Text>
        <Icon
          onPress={() => starHandler()}
          name={task?.star ? 'star' : 'star-o'}
          size={20}
          color="#b0b0b0"
        />
      </View>
      <View style={styles.taskDates}>
        <Text style={styles.taskCreated}>{task?.createdAt}</Text>
        <Text style={styles.taskUpdated}>{task?.updatedAt}</Text>
      </View>
      {showDelete && (
        <View style={styles.taskDeleteBtns}>
          <TouchableOpacity>
            <Text
              onPress={() => {
                removeTaskhandler(task?.title);
                setShowDelete(false);
              }}
              style={styles.taskDeleteBtn}>
              Delete
            </Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text
              onPress={() => setShowDelete(false)}
              style={styles.taskCloseBtn}>
              Close
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  taskContainer: {
    backgroundColor: '#3d3d3d',
    marginTop: 10,
    marginHorizontal: 20,
    borderRadius: 2,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  taskTitles: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 18,
  },
  taskTitle: {
    color: '#d4d2d2',
    fontSize: 18,
    fontWeight: '600',
  },
  taskDates: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  taskCreated: {
    color: '#d4d2d2',
  },
  taskUpdated: {
    color: '#d4d2d2',
  },
  taskDeleteBtns: {
    marginTop: 10,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  taskDeleteBtn: {
    backgroundColor: 'red',
    width: 50,
    textAlign: 'center',
    paddingVertical: 3,
    borderRadius: 2,
    color: 'white',
    marginRight: 12,
  },
  taskCloseBtn: {
    backgroundColor: '#828282',
    width: 50,
    textAlign: 'center',
    paddingVertical: 3,
    borderRadius: 2,
    color: 'white',
  },
});

export default Tasks;
