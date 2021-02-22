import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Navigator from './src/navigator';
// import {useReduxDevToolsExtension} from '@react-navigation/devtools';
import {navigationRef} from '_utils/navigationService';

export default function App() {
  // useReduxDevToolsExtension(navigationRef);
  return (
    <NavigationContainer ref={navigationRef}>
      <Navigator />
    </NavigationContainer>
  );
}
