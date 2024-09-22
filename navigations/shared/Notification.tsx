import HomeScreen from '@/screens/HomeScreen';
import React from 'react';

type PropsNotification = {
  Screen: any
}

export default function addNotificationStack(Stack: PropsNotification) {
  return (
    <>
      <Stack.Screen name="Notification" component={HomeScreen} />
    </>
  );
}
