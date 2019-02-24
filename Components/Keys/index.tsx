import React from 'react';
import { Button, StyleSheet, View } from 'react-native';

export const Keys = () => {
  return (
    <View style={styles.container}>
      <View>
        <Button title='9' onPress={() => console.log(9)} />
        <Button title='8' onPress={() => console.log(8)} />
        <Button title='7' onPress={() => console.log(7)} />
        <Button title='/' onPress={() => console.log('/')} />
      </View>
      <View>
        <Button title='6' onPress={() => console.log(6)} />
        <Button title='5' onPress={() => console.log(5)} />
        <Button title='4' onPress={() => console.log(4)} />
        <Button title='*' onPress={() => console.log('*')} />
      </View>
      <View>
        <Button title='3' onPress={() => console.log(3)} />
        <Button title='2' onPress={() => console.log(2)} />
        <Button title='1' onPress={() => console.log(1)} />
        <Button title='-' onPress={() => console.log('-')} />
      </View>
      <View>
        <Button title='0' onPress={() => console.log(0)} />
        <Button title='clear' onPress={() => console.log('clear')} />
        <Button title='+' onPress={() => console.log('+')} />
      </View>
      <View>
        <Button title='=' onPress={() => console.log('=')} />
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
