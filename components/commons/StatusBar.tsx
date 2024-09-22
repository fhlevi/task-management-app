import {StatusBar as StatusBarRN} from 'react-native';
import React from 'react';

type PropsStatusBar = {
  backgroundColor?: string
  barStyle?: 'default' | 'light-content' | 'dark-content'
}

const StatusBar = ({ 
  backgroundColor='transparent', 
  barStyle='dark-content' 
}: PropsStatusBar) => {
  return <StatusBarRN backgroundColor={backgroundColor} barStyle={barStyle} />;
};

export default StatusBar;
