import { StyleSheet } from 'react-native'

export default StyleSheet.create({

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
    },
    error: {
      flexDirection: 'row',
      marginTop: 15,
      borderBottomColor: 'red',
      borderBottomWidth: 1,
      alignItems: 'center',
      alignSelf: 'center',
      marginBottom: 15
    }
  });