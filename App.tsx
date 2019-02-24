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

interface IProps {
  props?: object;
}
interface IState {
  currentValue: number;
}

export default class App extends Component<IProps, IState> {
  public state = {
    currentValue: 0,
  };

  public handleCurrentValueChange = (val: number) => {
    return this.setState({ currentValue: val });
  };

  public render() {
    return (
      <View style={styles.container}>
        <Screen
          deviceWidth={deviceWidth}
          deviceHeight={deviceHeight}
          currentValue={this.state.currentValue}
          changeCurrentValue={this.handleCurrentValueChange}
        />
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
