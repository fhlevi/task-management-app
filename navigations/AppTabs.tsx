import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import TabBar from '@/components/layouts/TabBar';
import HomeStack from './HomeStack';
import NotesStack from './NotesStack';
import NotificationStack from './NotificationStack';
import ProfileStack from './ProfileStack';
import TaskStack from './TaskStack';

const Tab = createBottomTabNavigator();
const tabBarListeners = ({navigation, route}: any) => ({
  tabPress: () => navigation.navigate(route.name),
});

const AppTabs = () => {
  return (
    <Tab.Navigator tabBar={TabBar} screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        listeners={tabBarListeners}
        options={() => ({
          tabBarIcon: (style: any) => (
            <Image style={style} source={require('@/src/assets/icons/tab-home.png')} />
          ),
        })}
      />
      <Tab.Screen
        name="NotesStack"
        component={NotesStack}
        listeners={tabBarListeners}
        options={() => ({
          tabBarIcon: (style: any) => (
            <Image style={style} source={require('@/src/assets/icons/tab-notes.png')} />
          ),
        })}
      />
      <Tab.Screen
        name="TaskStack"
        component={TaskStack}
        listeners={tabBarListeners}
        options={() => ({
          tabBarIcon: () => (
            <Image source={require('@/src/assets/icons/tab-plus.png')} />
          ),
        })}
      />
      <Tab.Screen
        name="NotificationStack"
        component={NotificationStack}
        listeners={tabBarListeners}
        options={() => ({
          tabBarIcon: (style: any) => (
            <Image style={style} source={require('@/src/assets/icons/tab-notification.png')} />
          ),
        })}
      />
      <Tab.Screen
        name="ProfileStack"
        component={ProfileStack}
        listeners={tabBarListeners}
        options={() => ({
          tabBarIcon: (style: any) => (
            <Image style={style} source={require('@/src/assets/icons/tab-profile.png')} />
          ),
        })}
      />
    </Tab.Navigator>
  );
};

export default AppTabs;

const styles = StyleSheet.create({});
