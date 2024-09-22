import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import addTaskStack from './shared/Task';

const Stack = createStackNavigator();

const TaskStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {addTaskStack(Stack)}
    </Stack.Navigator>
  );
};

export default TaskStack;
