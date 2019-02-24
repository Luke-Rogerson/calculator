import React, { Component } from 'react';
import {
  Button,
  Dimensions,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Keypad from './Components/Keypad';
import Screen from './Components/Screen';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

interface Props {
  props?: object;
}
export default class App extends Component<Props> {
  public render() {
    return (
      <View style={styles.container}>
        <Screen deviceWidth={deviceWidth} deviceHeight={deviceHeight} />
        <Keypad />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgreen',
    width: deviceWidth,
    paddingTop: 50,
  },
});
