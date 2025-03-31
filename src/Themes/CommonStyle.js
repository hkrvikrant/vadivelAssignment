import {Dimensions, StyleSheet} from 'react-native';

import Colors from './Colors';
import {FontsFamilies, FontSize, FontsWeights} from './Fonts';

export const windowHeight = Dimensions.get('window').height;
export const windowWidth = Dimensions.get('window').width;

export const commonStyles = StyleSheet.create({
  commonContainer: {
    backgroundColor: Colors.white,
    minHeight: windowHeight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoImage: {
    width: windowWidth * 0.83,
    height: windowWidth * 0.6,
  },
  paddingRight15: {
    paddingRight: 15,
  },
  padding20: {
    padding: 20,
  },
  flexRow: {
    flexDirection: 'row',
  },

  // Auth common
  authScrollContainer: {
    backgroundColor: Colors.white,
    minHeight: windowHeight,
  },
  authTopImg: {
    height: windowHeight * 0.415,
    width: windowWidth * 0.93,
  },
  authTitle: {
    marginVertical: 15,
    fontSize: FontSize.fontSize26,
    fontWeight: FontsWeights.FW700,
    fontFamily: FontsFamilies.serif,
  },
});
