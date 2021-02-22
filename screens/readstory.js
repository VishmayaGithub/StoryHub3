import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native';
import {Header} from 'react-native-elements'
import * as firebase from 'firebase'
import db from '../config.js'

export default class Read extends React.Component {
  

  
  render(){
  return (
    <View style={styles.container}>
       <Header
          backgroundColor={'#3895D3'}
          centerComponent={{
            text: 'Story Hub',
            style: { color: '#fff', fontSize: 20 },
          }}
        />
      <Text style={styles.text}>Read</Text>

    </View>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    
  },
  text:{
    fontSize:20,
    marginTop:40
  },

});
