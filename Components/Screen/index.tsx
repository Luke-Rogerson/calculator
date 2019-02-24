import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface Props {
  deviceWidth: number;
  deviceHeight: number;
  currentValue: number;
  changeCurrentValue: () => number;
}

export const Screen = (props: Props) => {
  return (
    <View>
      <Text>Value: {props.currentValue}</Text>
    </View>
  );
};

export default Screen;

const styles = (props: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      width: props.deviceWidth,
    },
  });
