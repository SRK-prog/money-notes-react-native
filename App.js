/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {SafeAreaView} from 'react-native';
import Home from './pages/Home';
import Details from './pages/Details';

const NavStack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <NavStack.Navigator>
        <NavStack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <NavStack.Screen name="Counts" component={Details} />
      </NavStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
