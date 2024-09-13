import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import addOnboardingStack from './shared/Onboarding';

const Stack = createStackNavigator();

const OnboardingStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {addOnboardingStack(Stack)}
    </Stack.Navigator>
  );
};

export default OnboardingStack;
