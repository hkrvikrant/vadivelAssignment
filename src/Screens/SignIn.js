import React, {useContext} from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {Formik} from 'formik';

import images from '../Themes/Images';
import {commonStyles, windowHeight, windowWidth} from '../Themes/CommonStyle';
import {FontsFamilies, FontSize, FontsWeights} from '../Themes/Fonts';
import Colors from '../Themes/Colors';

import InputWithTitle from '../CommonComponent/InputWithTitle';
import CButton from '../CommonComponent/CButton';
import {AuthContext} from '../Constant/Context';
import {loginValidationSchema} from '../Themes/validations';

const SignIn = ({navigation}) => {
  const {signIn} = useContext(AuthContext);

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={loginValidationSchema}
      onSubmit={values => {
        signIn(values?.email);
      }}>
      {({values, handleChange, handleSubmit, errors, touched}) => (
        <ScrollView
          contentContainerStyle={commonStyles.authScrollContainer}
          showsVerticalScrollIndicator={false}>
          {/* <Image style={commonStyles.authTopImg} source={images.authCircle} /> */}
          <Image source={images.authCircle} />
          <View style={commonStyles.padding20}>
            <Text style={commonStyles.authTitle}>SignIn</Text>

            <InputWithTitle
              title="Email Address"
              placeholder="example@gmail.com"
              value={values?.email}
              onChangeText={handleChange('email')}
              error={touched?.email && errors?.email}
            />
            <InputWithTitle
              title="Password"
              placeholder="*****"
              value={values?.password}
              onChangeText={handleChange('password')}
              passwordInput={true}
              error={touched?.password && errors?.password}
            />
            <Text
              style={styles.forgotPassword}
              onPress={() => navigation.navigate('forgotPassword')}>
              Forgot Passowrd?
            </Text>
            <CButton title="Login" onPress={() => handleSubmit()} />
          </View>
        </ScrollView>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  forgotPassword: {
    fontSize: FontSize.fontSize16,
    fontWeight: FontsWeights.FW500,
    fontFamily: FontsFamilies.serif,
    textAlign: 'right',
    color: Colors.blue,
  },
});

export default SignIn;
