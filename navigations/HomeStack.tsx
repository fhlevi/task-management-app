import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import addHomeStack from './shared/Home';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {addHomeStack(Stack)}
    </Stack.Navigator>
  );
};

export default HomeStack;
