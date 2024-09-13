import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import OnboardingStack from './OnboardingStack';

const Stack = createStackNavigator();

function Navigations() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="OnboardingStack">
        <Stack.Screen name="OnboardingStack" component={OnboardingStack} />
        {/* <Stack.Screen name="AuthStack" component={AuthStack} />
        <Stack.Screen name="AppTabs" component={AppTabs} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigations;
