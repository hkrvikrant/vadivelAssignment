import React from 'react';
import {Alert, Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {Formik} from 'formik';

import {forgotPasswordValidationSchema} from '../Themes/validations';
import images from '../Themes/Images';
import {commonStyles} from '../Themes/CommonStyle';

import InputWithTitle from '../CommonComponent/InputWithTitle';
import CButton from '../CommonComponent/CButton';

const ForgotPassword = () => {
  return (
    <Formik
      initialValues={{
        email: '',
      }}
      validationSchema={forgotPasswordValidationSchema}
      onSubmit={values => {
        Alert.alert('Submitted', values?.email);
      }}>
      {({values, handleChange, handleSubmit, errors, touched}) => (
        <ScrollView
          contentContainerStyle={commonStyles.authScrollContainer}
          showsVerticalScrollIndicator={false}>
          {/* <Image style={commonStyles.authTopImg} source={images.authCircle} /> */}
          <Image source={images.authCircle} />
          <View style={commonStyles.padding20}>
            <Text style={commonStyles.authTitle}>Forgot Passowrd</Text>

            <InputWithTitle
              title="Email Address"
              placeholder="example@gmail.com"
              value={values?.email}
              onChangeText={handleChange('email')}
              error={touched?.email && errors?.email}
            />

            <CButton title="Submit" onPress={() => handleSubmit()} />
          </View>
        </ScrollView>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({});

export default ForgotPassword;
