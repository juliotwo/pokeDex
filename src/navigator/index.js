import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '_screens/Home';
export default function App() {
  const AuthStack = createStackNavigator();
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
      }}>
      <AuthStack.Screen name="Home" component={Home} />
    </AuthStack.Navigator>
  );
}
