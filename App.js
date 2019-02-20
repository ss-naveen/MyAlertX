import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';

import Login from './components/Login';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
      'Cmd+D or Shake for dev menu',
  Android: 'Double tap R on your keyboard to reload,\n' +
      'Shake or press menu button for dev menu',
});

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Login />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    backgroundColor: '#F5FCFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
