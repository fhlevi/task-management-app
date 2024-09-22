import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import addNotesStack from './shared/Notes';

const Stack = createStackNavigator();

const NotesStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {addNotesStack(Stack)}
    </Stack.Navigator>
  );
};

export default NotesStack;
