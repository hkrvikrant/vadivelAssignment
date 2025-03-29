import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';

import images from '../Themes/Images';
import {commonStyles, windowHeight, windowWidth} from '../Themes/CommonStyle';
import {FontsFamilies, FontSize, FontsWeights} from '../Themes/Fonts';
import InputWithTitle from '../CommonComponent/InputWithTitle';
import CButton from '../CommonComponent/CButton';

const SignIn = () => {
  const isApiLoading = false;

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required('Email is required')
      .test('Validate Email', `Please Enter a Valid Email`, value => {
        const re =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(value).toLowerCase());
      }),
    password: Yup.string()
      .required('Password is required')
      .min(8, 'Password must contain 8 or more characters'),
  });

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={validationSchema}
      onSubmit={values => {
        console.warn('userLoginAction', values);
      }}>
      {({values, handleChange, handleSubmit, errors, touched}) => (
        <ScrollView
          contentContainerStyle={commonStyles.commonContainer}
          showsVerticalScrollIndicator={false}>
          <Image style={styles.topImg} source={images.authCircle} />
          <View style={styles.container}>
            <Text style={styles.title}>SignIn</Text>

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
            <CButton
              title="Login"
              // onPress={() => navigation.navigate('home')}
              onPress={() => handleSubmit()}
              disabled={isApiLoading}
            />
          </View>
        </ScrollView>
      )}
    </Formik>
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
