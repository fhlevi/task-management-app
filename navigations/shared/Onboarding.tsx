import React from 'react';
import WelcomeScreen from 'screens/WelcomeScreen';

interface IAuth {
  Screen: any;
}

export default function addOnboardingStack(Stack: IAuth) {
  return (
    <>
      <Stack.Screen name="Onboarding" component={WelcomeScreen} />
    </>
  );
}
