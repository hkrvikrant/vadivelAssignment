import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import {commonStyles} from '../Themes/CommonStyle';

export default function CButton({onPress, title}) {
  return (
    <TouchableOpacity
      onPress={() => onPress()}
      style={commonStyles.commonButtonStyle}>
      <Text style={commonStyles.commonButtonTextStyle}>{title}</Text>
    </TouchableOpacity>
  );
}
