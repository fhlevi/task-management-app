import {Dimensions, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const {height, width} = Dimensions.get('window');

type PropsWrapper = {
  children: React.ReactNode;
};

const Wrapper = ({children}: PropsWrapper) => {
  return <SafeAreaView style={styles.container}>{children}</SafeAreaView>;
};

export default Wrapper;

const styles = StyleSheet.create({
  container: {
    height: height,
    width: width,
    backgroundColor: '#fff',
  },
});
