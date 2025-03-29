import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import Home from '../Screens/Home';
import SignIn from '../Screens/SignIn';
import Colors from '../Themes/Colors';
import {TouchableOpacity} from 'react-native';
import {commonStyles} from '../Themes/CommonStyle';

const Stack = createStackNavigator();

export default function AppNav() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="signIn"
          component={SignIn}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="home"
          component={Home}
          options={{
            headerLeft: false,
            title: 'Assignment',
            headerRight: () => (
              <TouchableOpacity style={commonStyles.paddingRight15}>
                <MaterialIcons name="logout" size={30} color={Colors.black} />
              </TouchableOpacity>
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
