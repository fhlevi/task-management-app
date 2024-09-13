/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import RootLayout from 'components/layouts/RootLayout';
import Navigations from 'navigations/Root';

function App() {
  return (
    <RootLayout>
      <Navigations />
    </RootLayout>
  );
}

export default App;
