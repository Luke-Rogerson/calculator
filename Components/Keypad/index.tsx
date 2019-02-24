import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Keys from '../Keys/index';

export const Keypad = () => {
  return (
    <View style={styles.container}>
      <Keys />
    </View>
  );
};

export default Keypad;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
});
