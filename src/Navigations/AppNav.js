import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import Home from '../Screens/Home';
import Colors from '../Themes/Colors';
import {TouchableOpacity} from 'react-native';
import {commonStyles} from '../Themes/CommonStyle';
import {AuthContext} from '../Constant/Context';
import MarchentDetails from '../Screens/MarchentDetails';

const Stack = createStackNavigator();

export default function AppNav() {
  const {signOut} = useContext(AuthContext);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="home"
          component={Home}
          options={{
            headerLeft: false,
            title: 'Assignment',
            headerRight: () => (
              <TouchableOpacity
                style={commonStyles.paddingRight15}
                onPress={() => signOut()}>
                <MaterialIcons name="logout" size={30} color={Colors.blue} />
              </TouchableOpacity>
            ),
          }}
        />
        <Stack.Screen
          name="marchentDetails"
          component={MarchentDetails}
          options={{
            title: 'Marchent Details',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
