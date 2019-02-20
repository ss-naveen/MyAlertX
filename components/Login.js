import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Image, TextInput } from 'react-native';
import { Container, View, Text } from 'native-base'
import { MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';

const styles = StyleSheet.create({
  image: {
    width:230,
    height:110,
    alignSelf: 'center'
  },
  input: {
    height: 40,
    width: 250,
    fontSize: 18
  },
  container: {
    flex:1,
    flexDirection: 'column',
    marginTop: 100,
    backgroundColor: null
  },
  rowStyle: {
    flexDirection: 'row',
    marginTop: 30,
    borderWidth:1,
    borderColor:'green',
    alignItems: 'center'
  },
  columnStyle: {
    marginTop: 80
  },
  imageRotate: {
    transform: [{ rotate: '90deg'}],
    marginRight: 10,
  }
});

export default class Login extends Component {
  render() {
    return(
      <Container style={styles.container}>
        <Image
          style={styles.image}
          source={require('../image/LoginBGLogo.png')}
        />
        <View style={styles.columnStyle}>
          <View style={styles.rowStyle}>
            <FontAwesome name="user" size={30} color="green" style={{marginRight: 10, marginLeft: 6}} />
            <TextInput style={styles.input}
              placeholder="UserName"
            />
          </View>
          <View style={styles.rowStyle}>
            <MaterialCommunityIcons name="key" size={30} color="green" style={styles.imageRotate} />
            <TextInput style={styles.input}
              placeholder="Password"
              secureTextEntry={true}
            />
          </View>
        </View>
      </Container>
    )
  }
}
