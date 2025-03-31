import React from 'react';
import {StyleSheet, View, Text, ScrollView, Image} from 'react-native';

import Colors from '../Themes/Colors';
import {commonStyles, windowHeight, windowWidth} from '../Themes/CommonStyle';
import {FontsFamilies, FontSize, FontsWeights} from '../Themes/Fonts';

const MarchentDetails = ({route}) => {
  const item = route?.params;
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}>
      <Image source={{uri: item?.profile}} style={styles.profileImg} />
      <View style={commonStyles.flexRow}>
        <Text style={styles.title}>Name :</Text>
        <Text style={styles.text}>
          {item?.first_name} {item?.last_name}
        </Text>
      </View>
      <View style={commonStyles.flexRow}>
        <Text style={styles.title}>Gender :</Text>
        <Text style={styles.text}>{item?.gender}</Text>
      </View>
      <View style={commonStyles.flexRow}>
        <Text style={styles.title}>Phone No. :</Text>
        <Text style={styles.text}>{item?.phoneNumber}</Text>
      </View>
      <View style={commonStyles.flexRow}>
        <Text style={styles.title}>Email :</Text>
        <Text style={styles.text}>{item?.email}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: windowHeight,
    padding: 15,
    backgroundColor: Colors.white,
  },
  profileImg: {
    backgroundColor: Colors.whiteSmoke,
    height: windowWidth * 0.5,
    width: windowWidth * 0.5,
    borderRadius: 100,
    elevation: 3,
    alignSelf: 'center',
    marginBottom: 15,
  },
  title: {
    color: Colors.black,
    fontFamily: FontsFamilies.serif,
    letterSpacing: 0.5,
    paddingVertical: 3,
    fontSize: FontSize.fontSize16,
    marginRight: 5,
    fontWeight: FontsWeights.FW700,
  },
  text: {
    color: Colors.black,
    fontFamily: FontsFamilies.serif,
    letterSpacing: 0.5,
    paddingVertical: 3,
    textAlignVertical: 'bottom',
    paddingBottom: 5,
  },
});

export default MarchentDetails;
