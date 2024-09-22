import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import addProfileStack from './shared/Profile';

const Stack = createStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {addProfileStack(Stack)}
    </Stack.Navigator>
  );
};

export default ProfileStack;
