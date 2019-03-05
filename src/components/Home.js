import React, { Component } from 'react';
import {  AsyncStorage,
          Image,
          ImageBackground,
          TextInput,
          Alert,
          TouchableOpacity,
          Linking,
          LayoutAnimation,
          Keyboard } from 'react-native';
import { View, Text } from 'native-base'
import { MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';
import { loginUser } from '../services/LoginRequest.js';
import styles from '../CSS/LoginCss';

export default class Home extends Component {

  render() {
    return(

        <View style={styles.container}>
            <Text>Home Page</Text>
        </View>
    );
  }
}
