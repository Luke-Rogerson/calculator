import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface IProps {
  deviceWidth: number;
  deviceHeight: number;
  displayValue: number;
}

interface IState {
  displayValue: number;
}

export class Screen extends Component<IProps, IState> {
  state = {
    displayValue: 0,
  };

  static getDerivedStateFromProps(props: IProps, state: IState) {
    if (props.displayValue !== state.displayValue) {
      return {
        displayValue: props.displayValue,
      };
    }
    return null;
  }

  render() {
    return (
      <View>
        <Text>Value: {this.state.displayValue}</Text>
      </View>
    );
  }
}

export default Screen;

const styles = (props: any) =>
  StyleSheet.create({
    container: {
      flex: 1,
      width: props.deviceWidth,
    },
  });
