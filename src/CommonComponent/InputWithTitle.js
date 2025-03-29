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
import {FontsFamilies, FontSize, FontsWeights} from '../Themes/Fonts';

export default function InputWithTitle({
  title,
  placeholder,
  onChangeText,
  value,
  passwordInput,
  error,
}) {
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  return (
    <View style={styles.inputContainer}>
      <Text style={styles.inputTitle}>{title}</Text>
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
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 10,
  },
  inputTitle: {
    fontSize: FontSize.fontSize16,
    fontWeight: FontsWeights.FW500,
    paddingBottom: 5,
    fontFamily: FontsFamilies.serif,
  },
  inputText: {
    backgroundColor: Colors.white,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.grey,
    paddingLeft: 10,
    letterSpacing: 0.5,
    fontFamily: FontsFamilies.serif,
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
  errorText: {
    color: Colors.error,
    fontSize: FontSize.fontSize12,
    fontFamily: FontsFamilies.serif,
  },
});
