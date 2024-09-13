import React, { ReactNode } from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {SafeAreaView} from 'react-native';
import StatusBar from '../commons/StatusBar';

type Props = {
  children?: ReactNode;
};

const RootLayout = (props: Props) => {
  return (
    <>
      <StatusBar />
      <SafeAreaView style={{flex: 1}}>
        <SafeAreaProvider>{props.children}</SafeAreaProvider>
      </SafeAreaView>
    </>
  );
};

export default RootLayout;
