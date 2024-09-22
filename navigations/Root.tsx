import React, { useEffect, useState } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import WelcomingStack from './WelcomingStack';
import useWelcoming from 'store/welcoming';
import OnboardingStack from './OnboardingStack';
import AppTabs from './AppTabs';

const Stack = createStackNavigator();

function Navigations() {
  const isInitialized: any = useWelcoming((state) => state.isInitialized)

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="WelcomingStack">
        <Stack.Screen 
          name="WelcomingStack" 
          component={WelcomingStack} 
        />
        <Stack.Screen 
          name="OnboardingStack" 
          component={OnboardingStack} 
        />
        {/* <Stack.Screen name="AuthStack" component={AuthStack} /> */}
        <Stack.Screen 
          name="AppTabs" 
          component={AppTabs} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigations;
