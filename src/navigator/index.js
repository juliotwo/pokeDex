import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '_screens/Home';
import PokeDetail from '_screens/PokeDetail';
export default function App() {
  const AuthStack = createStackNavigator();
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
      }}>
      <AuthStack.Screen name="Home" component={Home} />
      <AuthStack.Screen name="PokeDetail" component={PokeDetail} />
    </AuthStack.Navigator>
  );
}
