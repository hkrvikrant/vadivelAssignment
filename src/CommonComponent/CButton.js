import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

import Colors from '../Themes/Colors';
import {FontsFamilies, FontsWeights} from '../Themes/Fonts';

export default function CButton({onPress, title}) {
  return (
    <TouchableOpacity onPress={() => onPress()} style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
    marginVertical: 20,
    backgroundColor: Colors.darkBlue,
  },
  title: {
    color: Colors.white,
    letterSpacing: 0.7,
    fontWeight: FontsWeights.FW500,
    textAlignVertical: 'center',
    fontFamily: FontsFamilies.serif,
  },
});
