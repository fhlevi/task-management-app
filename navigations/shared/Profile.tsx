import HomeScreen from '@/screens/HomeScreen';
import React from 'react';

interface PropsProfile {
  Screen: any;
}

export default function addProfileStack(Stack: PropsProfile) {
  return (
    <>
      <Stack.Screen name="Profile" component={HomeScreen} />
    </>
  );
}
