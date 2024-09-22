import React, { ReactNode } from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

type Props = {
  children?: ReactNode;
};

const RootLayout = (props: Props) => {
  return (
    <>
      <SafeAreaProvider>{props.children}</SafeAreaProvider>
    </>
  );
};

export default RootLayout;
