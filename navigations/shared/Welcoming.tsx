import React from 'react';
import WelcomeScreen from 'screens/WelcomeScreen';

interface PropsWelcoming {
  Screen: any;
}

export default function addWelcomingStack(Stack: PropsWelcoming) {
  return (
    <>
      <Stack.Screen name="Welcoming" component={WelcomeScreen} />
    </>
  );
}
