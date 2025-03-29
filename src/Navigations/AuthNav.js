import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import SignIn from '../Screens/SignIn';
import ForgotPassword from '../Screens/ForgotPassword';

const Stack = createStackNavigator();

export default function AuthNav() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="signIn" component={SignIn} />
        <Stack.Screen name="forgotPassword" component={ForgotPassword} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
