import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import addWelcomingStack from './shared/Welcoming';

const Stack = createStackNavigator();

const WelcomingStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {addWelcomingStack(Stack)}
    </Stack.Navigator>
  );
};

export default WelcomingStack;
