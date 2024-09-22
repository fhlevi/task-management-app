import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import addNotificationStack from './shared/Notes';

const Stack = createStackNavigator();

const NotificationStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {addNotificationStack(Stack)}
    </Stack.Navigator>
  );
};

export default NotificationStack;
