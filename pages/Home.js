import React, {useState, useEffect} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/Ionicons';
import AddTask from '../components/homeCompponents/AddTask';
import Task from '../components/homeCompponents/Task';
import { SQLiteDatabase } from 'react-native-sqlite-storage';

function Home({navigation}) {
  const [newData, setNewData] = useState([]);
  const [stared, setStared] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [staredFilter, setStaredFilter] = useState(null);

  const addTaskHandler = request => {
    setNewData([request, ...newData]);
  };

  useEffect(() => {
    (async () => {
      const data = await fetch("https://my-notepad-backend.herokuapp.com/lists");
      const response = await data.json();
      setNewData(response);
    })()
  },[])

  const removeTaskhandler = id => {
    const newItems = newData.filter(item => item.title != id);
    setNewData(newItems);
  };

  const showStaredHandler = () => {
    if (staredFilter === false) {
      setStaredFilter(null);
      setStared(false);
    } else {
      setStaredFilter(false);
      setStared(true);
    }
  };

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      style={styles.container}>
      <View>
        <View style={styles.header}>
          <Text style={styles.logo}>Book</Text>
          <View>
            <Icon
              onPress={() => setShowMenu(!showMenu)}
              name="menu"
              size={20}
              color="white"
            />
          </View>
        </View>
        {showMenu && (
          <View style={styles.menuContainer}>
            <TouchableOpacity
              activeOpacity={0.5}
              style={styles.menuItems}
              onPress={showStaredHandler}>
              <Icon
                name="star"
                size={16}
                color={stared ? '#595959' : 'white'}
              />
              <Text
                style={[
                  styles.menuItem,
                  {color: `${stared ? '#595959' : 'white'}`},
                ]}>
                Stared
              </Text>
            </TouchableOpacity>
          </View>
        )}
        <AddTask addTaskHandler={addTaskHandler} />
        <Task
          staredFilter={staredFilter}
          removeTaskhandler={removeTaskhandler}
          tasks={newData}
          navigation={navigation}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#333333',
  },
  header: {
    height: 50,
    backgroundColor: '#262626',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  logo: {
    color: 'white',
    fontSize: 16,
  },
  menu: {
    color: 'white',
    fontSize: 16,
  },
  menuContainer: {
    backgroundColor: '#262626',
  },
  menuItems: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  menuItem: {
    marginLeft: 10,
  },
});

export default Home;
