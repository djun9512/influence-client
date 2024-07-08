import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import InstagramLoginScreen from './login';
import InstagramHomeScreen from './InstagramHomeScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={InstagramLoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={InstagramHomeScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
