import React, { Component } from 'react';
import {  StyleSheet,
          AsyncStorage,
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

export default class Home extends Component {

  render() {
    return(
      <View style={styles.container}>
          <Text style={styles.welcome}>
              THIS IS THE SECOND SCREEN.
          </Text>
      </View>
  );
  }
}

const styles=StyleSheet.create({
  container:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'#F5FCFF',
  },
  welcome:{
      fontSize:20,
      textAlign:'center',
      margin:10,
  },
  instructions:{
      textAlign:'center',
      color:'#333333',
      marginBottom:5,
  },
});
