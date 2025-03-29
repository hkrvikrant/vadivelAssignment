import {Dimensions, StyleSheet} from 'react-native';

import Colors from './Colors';
import {FontSize, FontsWeights} from './Fonts';

export const windowHeight = Dimensions.get('window').height;
export const windowWidth = Dimensions.get('window').width;

export const commonStyles = StyleSheet.create({
  commonContainer: {
    backgroundColor: Colors.white,
    minHeight: windowHeight,
  },

  inputContainer: {
    marginVertical: 10,
  },
  inputTitle: {
    fontSize: FontSize.fontSize16,
    fontWeight: FontsWeights.FW500,
    paddingBottom: 5,
  },

  paddingRight15: {
    paddingRight: 15,
  },

  // common auth button style
  commonButtonStyle: {
    borderRadius: 5,
    padding: 10,
    alignItems: 'center',
    marginVertical: 20,
    backgroundColor: Colors.darkBlue,
  },
  commonButtonTextStyle: {
    color: Colors.white,
    letterSpacing: 0.7,
    fontWeight: FontsWeights.FW500,
    textAlignVertical: 'center',
  },
});
