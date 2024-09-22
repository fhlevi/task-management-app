import HomeScreen from '@/screens/HomeScreen';
import React from 'react';

interface PropsTask {
  Screen: any;
}

export default function addTaskStack(Stack: PropsTask) {
  return (
    <>
      <Stack.Screen name="Task" component={HomeScreen} />
    </>
  );
}
