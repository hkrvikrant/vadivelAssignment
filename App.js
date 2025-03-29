import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';

import AppNav from './src/Navigations/AppNav';
import Colors from './src/Themes/Colors';

export default function App() {
  return (
    <>
      <StatusBar backgroundColor={Colors.blue} barStyle="light-content" />
      <AppNav />
    </>
  );
}
