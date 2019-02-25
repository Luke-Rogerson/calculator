import React from 'react';
import { Button, StyleSheet, View } from 'react-native';

interface Props {
  updateDisplayValue(val: number): void;
  selectOperator(operator: string): void;
  updateStoredValue(): void;
  clear(): void;
}

export const Keys = (props: Props) => {
  return (
    <View style={styles.container}>
      <View>
        <Button title='9' onPress={() => props.updateDisplayValue(9)} />
        <Button title='8' onPress={() => props.updateDisplayValue(8)} />
        <Button title='7' onPress={() => props.updateDisplayValue(7)} />
        <Button title='/' onPress={() => props.selectOperator('divide')} />
      </View>
      <View>
        <Button title='6' onPress={() => props.updateDisplayValue(6)} />
        <Button title='5' onPress={() => props.updateDisplayValue(5)} />
        <Button title='4' onPress={() => props.updateDisplayValue(4)} />
        <Button title='*' onPress={() => props.selectOperator('multiply')} />
      </View>
      <View>
        <Button title='3' onPress={() => props.updateDisplayValue(3)} />
        <Button title='2' onPress={() => props.updateDisplayValue(2)} />
        <Button title='1' onPress={() => props.updateDisplayValue(1)} />
        <Button title='-' onPress={() => props.selectOperator('subtract')} />
      </View>
      <View>
        <Button title='0' onPress={() => props.updateDisplayValue(0)} />
        <Button title='clear' onPress={() => props.clear()} />
        <Button title='+' onPress={() => props.selectOperator('add')} />
      </View>
      <View>
        <Button title='=' onPress={() => props.updateStoredValue()} />
      </View>
    </View>
  );
};

export default Keys;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightpink',
  },
});
