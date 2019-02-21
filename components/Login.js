import React, { Component } from 'react';
import { StyleSheet, Image, ImageBackground, TextInput, Alert, TouchableOpacity, Linking } from 'react-native';
import { Container, View, Text } from 'native-base'
import { MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';

const styles = StyleSheet.create({

  logoImage: {
    width:230,
    height:110,
    marginTop: 80,
    alignSelf: 'center'
  },
  input: {
    height: 40,
    width: '80%',
    fontSize: 18
  },
  container: {
    flex:1,
    flexDirection: 'column',
    backgroundColor: null,
    alignItems: 'center'
  },
  rowStyle: {
    flexDirection: 'row',
    marginTop: 15,
    borderBottomColor: '#4C77C4',
    borderBottomWidth: 1,
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 15
  },
  columnStyle: {
    marginTop: 80,
    alignSelf: 'center',
    alignItems: 'center',
    width: 350,
    backgroundColor: 'rgba(235,235,241,0.6)',
    borderRadius: 8
  },
  imageRotate: {
    transform: [{ rotate: '90deg'}],
    marginRight: 10,
  },

  backgroundImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover'
  },
  button: {
    height: 45,
    width: 45,
    marginTop: 80,
    alignSelf: 'center'
  }
});

export default class Login extends Component {

  _onLoginPressed() {
    Alert.alert('login tapped')
  }
  _goToURL() {
    let url = 'http://google.com'
    Linking.canOpenURL(url).then(supported => {
      if (supported) {
        Linking.openURL(url);
      } else {
        console.log('Don\'t know how to open URI: ' + url);
      }
    });
  }
  render() {
    return(
        <ImageBackground source={require('../assets/LaunchImage.jpg')}
          style={styles.backgroundImage}>
          <TouchableOpacity onPress={this._goToURL} style={styles.logoImage}>
            <Image style={{ width: 230, height: 110}}
              source={require('../assets/LoginBGLogo.png')}
            />
          </TouchableOpacity>
          <View style={styles.columnStyle}>
            <View style={styles.rowStyle}>
              <FontAwesome name="user" size={30} color="#4C77C4" style={{marginRight: 10, marginLeft: 6}} />
              <TextInput style={styles.input}
                placeholder="Phone Number"
              />
            </View>
            <View style={styles.rowStyle}>
              <MaterialCommunityIcons name="key" size={30} color="#4C77C4" style={styles.imageRotate} />
                <TextInput style={styles.input}
                  placeholder="Password"
                  secureTextEntry={true}
                />
              </View>
            </View>
          <TouchableOpacity onPress={this._onLoginPressed} style={styles.button}>
            <Image
              style={{ width: 45, height: 45}}
              source={require('../assets/accept_circle.png')}
            />
          </TouchableOpacity>
          <View style={{alignSelf:'center', position: "absolute", bottom: 30}}>
            <Text>
              <Text> Also visit our website </Text>
              <Text style={{ color: '#4C77C4'}} onPress={this._goToURL}>here</Text>
            </Text>
          </View>
        </ImageBackground>
    );
  }
}
