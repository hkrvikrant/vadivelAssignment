import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

import Colors from '../Themes/Colors';

const MarchentDetails = ({route}) => {
  const {firstName, lastName} = route.params;
  return (
    <View style={styles.container}>
      <Text>
        {firstName} {lastName}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: Colors.white,
  },
});

export default MarchentDetails;
