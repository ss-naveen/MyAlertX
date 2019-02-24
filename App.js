import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import { Permissions, Notifications, Location } from 'expo'

import Login from './components/Login';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
      'Cmd+D or Shake for dev menu',
  Android: 'Double tap R on your keyboard to reload,\n' +
      'Shake or press menu button for dev menu',
});


export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      token:'',
      location: null
    }
    this.registerForPushNotifications()
  }

  async registerForPushNotifications() {
    const { status } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
  
    if(status !== 'granted') {
      const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      if(status !== 'granted') {
        return;
      }
    }
  
    const token = await Notifications.getExpoPushTokenAsync();
  
    this.subscription = Notifications.addListener(this.handleNotification);
  
    this.setState({ token });
  }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if(status != 'granted') {
      this.setState({
        errorMessage: 'Permission to access locatin was denied'
      });
    }
    let location = await Location.getCurrentPositionAsync({});
    this.setState({ location });
  }

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
    // padding: 40,
    backgroundColor: '#F5FCFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
