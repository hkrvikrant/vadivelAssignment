import React, {useState} from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';

import images from '../Themes/Images';
import {commonStyles, windowHeight, windowWidth} from '../Themes/CommonStyle';
import {FontsFamilies, FontSize, FontsWeights} from '../Themes/Fonts';
import InputWithTitle from '../CommonComponent/InputWithTitle';
import CButton from '../CommonComponent/CButton';

const SignIn = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <ScrollView
      contentContainerStyle={commonStyles.commonContainer}
      showsVerticalScrollIndicator={false}>
      <Image style={styles.topImg} source={images.authCircle} />
      <View style={styles.container}>
        <Text style={styles.title}>SignIn</Text>

        <InputWithTitle
          title="Email Address"
          placeholder="example@gmail.com"
          onChangeText={e => setEmail(e)}
          value={email}
        />
        <InputWithTitle
          title="Password"
          placeholder="*****"
          onChangeText={e => setPassword(e)}
          value={password}
          passwordInput={true}
        />
        <CButton title="Sign-in" onPress={() => navigation.navigate('home')} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  topImg: {
    height: windowHeight * 0.415,
    width: windowWidth * 0.93,
  },
  container: {
    padding: 20,
  },
  title: {
    marginVertical: 15,
    fontSize: FontSize.fontSize26,
    fontWeight: FontsWeights.FW700,
    fontFamily: FontsFamilies.serif,
  },
});

export default SignIn;
