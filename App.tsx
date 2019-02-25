import React, { Component } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import Keys from './Components/Keys';
import Screen from './Components/Screen';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

interface IProps {
  inputANumber(val: number): void;
}
interface IState {
  storedValue: number;
  displayValue: number;
  operator?: string;
}
export default class App extends Component<IProps, IState> {
  public state = {
    storedValue: 0,
    displayValue: 0,
    operator: '',
  };

  private updateDisplayValue = async (val: number) => {
    if (!this.state.storedValue) this.setState({ storedValue: val });
    await this.setState({ displayValue: val });
  };

  private selectOperator = async (operator: string) => {
    await this.setState({ operator });
  };

  private updateStoredValue = async () => {
    if (!this.state.operator) return;

    const { operator } = this.state;

    switch (operator) {
      case 'add':
        await this.setState({
          storedValue: this.state.storedValue + this.state.displayValue,
        });
        break;

      case 'subtract':
        await this.setState({
          storedValue: this.state.storedValue - this.state.displayValue,
        });
        break;

      case 'divide':
        await this.setState({
          storedValue: this.state.storedValue / this.state.displayValue,
        });
        break;

      case 'multiply':
        await this.setState({
          storedValue: this.state.storedValue * this.state.displayValue,
        });
        break;
    }
    await this.setState({ displayValue: this.state.storedValue });
  };

  private clear = () => {
    this.setState({ storedValue: 0, displayValue: 0, operator: '' });
  };

  public render() {
    return (
      <View style={styles.container}>
        <Text>Operator: {this.state.operator}</Text>
        <Screen
          deviceWidth={deviceWidth}
          deviceHeight={deviceHeight}
          displayValue={this.state.displayValue}
        />
        <Keys
          updateDisplayValue={this.updateDisplayValue}
          selectOperator={this.selectOperator}
          updateStoredValue={this.updateStoredValue}
          clear={this.clear}
        />
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
