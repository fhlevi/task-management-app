import HomeScreen from '@/screens/HomeScreen';
import React from 'react';

interface PropsHome {
  Screen: any;
}

export default function addHomeStack(Stack: PropsHome) {
  return (
    <>
      <Stack.Screen name="Home" component={HomeScreen} />
    </>
  );
}
