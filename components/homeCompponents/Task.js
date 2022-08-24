import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Tasks from './Tasks';

function Task({tasks, removeTaskhandler, staredFilter, navigation}) {
  return (
    <View style={styles.mainContainer}>
      {tasks
        .filter(item => item.star !== staredFilter)
        .map((item, index) => (
          <View key={index}>
            <Tasks
              navigation={navigation}
              removeTaskhandler={removeTaskhandler}
              task={item}
            />
          </View>
        ))}
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 10,
  },
});

export default Task;
