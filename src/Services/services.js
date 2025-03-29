import AsyncStorage from '@react-native-async-storage/async-storage';

export const GET_USER_Email = async () => {
  const uEmail = await AsyncStorage.getItem('email');
  return uEmail;
};
