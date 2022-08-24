import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function ValuePair({item}) {
  return (
    <View style={styles.itemWrapper}>
      <Text style={styles.amountStyle}>{item?.amount}</Text>
      <Text style={styles.labelStyle}>{item?.label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  itemWrapper: {
    display: 'flex',
    flexDirection: 'row',
    height: 25,
    justifyContent: 'space-between',
  },
  amountStyle: {
    color: 'white',
  },
  labelStyle: {
    color: 'white',
  },
});

export default ValuePair;
