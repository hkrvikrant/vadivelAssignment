import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {Image, StatusBar, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import AppNav from './src/Navigations/AppNav';
import AuthNav from './src/Navigations/AuthNav';

import Colors from './src/Themes/Colors';
import {commonStyles} from './src/Themes/CommonStyle';
import images from './src/Themes/Images';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {AuthContext} from './src/Constant/Context';

export default function App() {
  const initialLoginState = {
    isLoading: true,
    userEmail: null,
  };

  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case 'RETRIEVE_DETAILS':
        return {
          ...prevState,
          userEmail: action.uemail,
          isLoading: false,
        };
      case 'LOGIN':
        return {
          ...prevState,
          userEmail: action.uemail,
          isLoading: false,
        };
      case 'LOGOUT':
        return {
          ...prevState,
          userEmail: null,
          isLoading: false,
        };
    }
  };

  const [loginState, dispatch] = React.useReducer(
    loginReducer,
    initialLoginState,
  );

  const authContext = React.useMemo(
    () => ({
      signIn: async email => {
        try {
          await AsyncStorage.setItem('email', email);
          dispatch({type: 'LOGIN', email: email});
        } catch (e) {
          console.log(e);
        }
      },
      signOut: async () => {
        try {
          await AsyncStorage.removeItem('email');
        } catch (e) {
          console.log(e);
        }
        dispatch({type: 'LOGOUT'});
      },
    }),
    [],
  );

  useEffect(() => {
    setTimeout(async () => {
      try {
        const uEmail = await AsyncStorage.getItem('email');
        if (uEmail !== null) {
          dispatch({type: 'RETRIEVE_DETAILS', email: uEmail});
        } else {
          dispatch({type: 'LOGOUT'});
        }
      } catch (e) {
        console.log('Error while getting userEmail', e);
      }
    }, 3000);
  }, []);

  if (loginState.isLoading) {
    return (
      <View style={commonStyles.commonContainer}>
        <StatusBar backgroundColor={Colors.blue} barStyle="light-content" />
        <Image source={images.logo} style={commonStyles.logoImage} />
      </View>
    );
  }

  return (
    <SafeAreaProvider>
      <StatusBar
        backgroundColor={
          // loginState.userEmail !== null ? Colors.white : Colors.blue
          Colors.blue
        }
        barStyle={
          // loginState.userEmail !== null ? 'dark-content' : 'light-content'
          'light-content'
        }
      />
      <AuthContext.Provider value={authContext}>
        {loginState.userEmail !== null ? <AppNav /> : <AuthNav />}
      </AuthContext.Provider>
    </SafeAreaProvider>
  );
}
