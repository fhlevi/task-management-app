import {StyleSheet, Text, View, TouchableWithoutFeedback} from 'react-native';
import {getFocusedRouteNameFromRoute} from '@react-navigation/native';
import React from 'react';

type PropsTabBar = {
  state: any;
  descriptors: any;
  navigation: any;
  isKeyboardShown?: boolean;
};

const TabBar = ({
  state,
  descriptors,
  navigation,
  isKeyboardShown,
}: PropsTabBar) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (isKeyboardShown || focusedOptions.tabBarVisible === false) {
    return null;
  }

  const focusedRouteName = getFocusedRouteNameFromRoute(
    state.routes[state.index],
  );

  const routesWithActiveIcon: any = {
    HomeStack: ['Home'],
    NotesStack: ['Notes'],
    TaskStack: ['Task'],
    NotificationStack: ['Notification'],
    ProfileStack: ['Profile'],
  };
  return (
    <View style={styles.tabbar}>
      {state.routes.map((route: any, index: any) => {
        const {options} = descriptors[route.key];
        
        const isTask = index === 2
        const isFocused = state.index === index;
        const isActive = focusedRouteName
          ? routesWithActiveIcon[route.name].includes(focusedRouteName)
          : isFocused;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          isTask ? (
            <TouchableWithoutFeedback
              key={route.key}
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityRole="button"
              accessibilityLabel={options.tabBarAccessibilityLabel}
              onPress={onPress}>
              <View style={[styles.tabCenter, styles.rounded]}>
                {options.tabBarIcon()}
              </View>
            </TouchableWithoutFeedback>
          ) : (
            <TouchableWithoutFeedback
              key={route.key}
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityRole="button"
              accessibilityLabel={options.tabBarAccessibilityLabel}
              onPress={onPress}>
              <View style={styles.tabIcon}>
                {options.tabBarIcon({
                  tintColor: isActive ? '#7FA6FF' : '#1C274CE5'
                })}
              </View>
            </TouchableWithoutFeedback>
          )
        );
      })}
    </View>
  );
};

export default TabBar;

const styles = StyleSheet.create({
  tabCenter: {
    top: -35,
    height: 56,
    width: 56,
    backgroundColor: '#7FA6FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  shadow: {
    shadowColor: '#7f5df0',
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5
  },
  rounded: {
    borderRadius: 35,
  },
  tabIcon: {
    flex: 1,
    alignItems: 'center',
    opacity: 100
  },
  tabbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 81,
    paddingBottom: 10,
    backgroundColor: '#EDF7FF',
  },
});
