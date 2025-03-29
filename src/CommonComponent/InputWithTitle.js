import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

import Colors from '../Themes/Colors';
import {commonStyles} from '../Themes/CommonStyle';

export default function InputWithTitle({
  title,
  placeholder,
  onChangeText,
  value,
  passwordInput,
}) {
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  return (
    <View style={commonStyles.inputContainer}>
      <Text style={commonStyles.inputTitle}>{title}</Text>
      {passwordInput ? (
        <View style={styles.secureInputContainer}>
          <TextInput
            placeholder={placeholder}
            style={styles.secureInputText}
            value={value}
            onChangeText={e => onChangeText(e)}
            secureTextEntry={secureTextEntry}
          />
          <TouchableOpacity
            onPress={() => setSecureTextEntry(!secureTextEntry)}>
            <Entypo
              name={!secureTextEntry ? 'eye' : 'eye-with-line'}
              size={20}
              color={Colors.black}
            />
          </TouchableOpacity>
        </View>
      ) : (
        <TextInput
          placeholder={placeholder}
          style={styles.inputText}
          value={value}
          onChangeText={e => onChangeText(e)}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  inputText: {
    backgroundColor: Colors.white,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.grey,
    paddingLeft: 10,
    letterSpacing: 0.5,
  },
  secureInputContainer: {
    flexDirection: 'row',
    backgroundColor: Colors.white,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.grey,
    letterSpacing: 0.5,
  },
  secureInputText: {
    flex: 1,
  },
});
