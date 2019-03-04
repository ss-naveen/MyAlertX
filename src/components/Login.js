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

export default class Login extends Component {

  constructor() {
    super()
    this.state={
      phoneNumber:'',
      password:' ',
      phoneNumberValidate:true,
      passwordValidate:true,
      lineHeight:1,
      lineColor: '#4C77C4'
    }
    this._onInputFieldFocus = this._onInputFieldFocus.bind(this)
    this._onInputFieldEndEditing = this._onInputFieldEndEditing.bind(this)
    this._onLoginPressed = this._onLoginPressed.bind(this)
  }

  _onLoginPressed() {  
    Keyboard.dismiss()
    loginUser(this.state.phoneNumber, this.state.password) 
    .then((response) =>{ 
      
      if(response.statusCode == 1) {        
        AsyncStorage.setItem("userData",JSON.stringify(response.entity))
        .then( ()=>{
          Alert.alert("Saved Successfully")
          this._getLocalData(1000)
        })
        .catch((error) =>{
          Alert.alert(error)
        });        
      } else {
        Alert.alert("User name or password is incorrect");
      }
    })
    .catch((error) => {
      // console.log("Error:" + error);      
    });

    // processFetchRequest(global.LOGIN_URL, 'POST', 
    //   JSON.stringify({'MobileNo':phoneNumber, 'password':password, 'IOSDeviceId':global.token}))
    // .then((response) =>{
    //   // console.warn(response);        
    //     return response
    // })
    // .catch((error) =>{

    // });


  }

  _getLocalData() {
    AsyncStorage.getItem("userData").then((value) =>{
      console.log("Local Storage:-" + value);      
    }).done();
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

  _onInputFieldFocus() {
    LayoutAnimation.spring();
    this.setState({lineHeight: 2, lineColor: '#4C77C4'});
  }

  _onInputFieldEndEditing(type){
    LayoutAnimation.spring();
    this.setState({lineHeight: 1, lineColor: '#4C77C4'});

    if(type == 'phoneNumber') {
      // console.log(type + ": " + "onEndEditing:" + this.state.phoneNumber + ":" + this.state.phoneNumber.length);
      if (this.state.phoneNumber.length < 10 && this.state.phoneNumber.length > 0) {
        Alert.alert('Phone number should be 10 digits')
        this.setState({phoneNumberValidate: false})
      }
    } else if(type == 'password') {
      // console.log(type + ": " + "onEndEditing:" + this.state.password  + ":" + this.state.password.length);
      if(this.state.password.length < 4 && this.state.password.length > 1) {
        Alert.alert('Password should be 4 digits')
        this.setState({passwordValidate: false})
      }
    }
  }

  validate(text, type) {
    number=/^[0-9]+$/
      if(type == 'phoneNumber') {
        if(number.test(text)) {                    
          this.setState({ phoneNumberValidate: true, phoneNumber:text })          
        } else {
          // Alert.alert('Phone number should be 10 digits')
          this.setState({phoneNumberValidate: false,})
        }
      } else if (type == 'password'){
        if(number.test(text)) {
          this.setState({ passwordValidate: true, password:text })
        } else {
          // Alert.alert('Password should be 4 digits')
          this.setState({passwordValidate: false,})
        }
    }
  }
  render() {
    return(
        <ImageBackground source={require('../../assets/splash.png')}
          style={styles.backgroundImage}>
          <TouchableOpacity onPress={this._goToURL} style={styles.logoImage}>
            <Image style={{ width: 230, height: 110}}
              source={require('../../assets/LoginBGLogo.png')}
            />
          </TouchableOpacity>
          <View style={styles.columnStyle}>
            <View style={[this.state.phoneNumberValidate ? [styles.rowStyle,{borderBottomWidth:this.state.lineHeight, borderBottomColor:this.state.lineColor}] : styles.error]}>
              <FontAwesome name="user" size={30} color="#4C77C4" style={{marginRight: 10, marginLeft: 6}} />
              <TextInput style={styles.input}
                onChangeText={(text)=>this.validate(text,'phoneNumber')}
                onFocus={this._onInputFieldFocus}
                onEndEditing={()=>this._onInputFieldEndEditing('phoneNumber')}
                placeholder="Phone Number"
                keyboardType='numbers-and-punctuation'
                maxLength={10}                
              />
            </View>
            <View style={[this.state.passwordValidate ? [styles.rowStyle,{borderBottomWidth:this.state.lineHeight, borderBottomColor:this.state.lineColor}] : styles.error]}>
              <MaterialCommunityIcons name="key" size={30} color="#4C77C4" style={styles.imageRotate} />
                <TextInput style={styles.input}
                  onChangeText={(text)=>this.validate(text,'password')}
                  onFocus={this._onInputFieldFocus}
                  onEndEditing={()=>this._onInputFieldEndEditing('password')}
                  placeholder="Password"
                  secureTextEntry={true}
                  keyboardType='numbers-and-punctuation'
                  maxLength={4}
                />
              </View>
            </View>
          <TouchableOpacity onPress={this._onLoginPressed} style={styles.button}>
            <Image
              style={{ width: 45, height: 45}}
              source={require('../../assets/accept_circle.png')}
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
