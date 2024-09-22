import HomeScreen from '@/screens/HomeScreen';
import React from 'react';

interface PropsNote {
  Screen: any;
}

export default function addHomeStack(Stack: PropsNote) {
  return (
    <>
      <Stack.Screen name="Note" component={HomeScreen} />
    </>
  );
}
