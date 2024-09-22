import OnboardingScreen from 'screens/OnboardingScreen';
import React from 'react';

type PropsOnboarding = {
  Screen: any
}

export default function addOnboardingStack(Stack: PropsOnboarding) {
  return (
    <>
      <Stack.Screen name="Onboarding" component={OnboardingScreen} />
    </>
  );
}
