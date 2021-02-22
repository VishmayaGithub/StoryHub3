import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Write from './screens/writestory'
import Read from './screens/readstory'
import {Header} from 'react-native-elements'



export default class App extends React.Component {
  render(){
  return (
    <AppContainer/>

  
  );
  }
}

const TabNavigator = createBottomTabNavigator({
  WriteStory: { screen: Write },
  ReadStory: { screen: Read },
  
},

{defaultNavigationOptions:({navigation})=>({
tabBarIcon:({})=>{
const routeName=navigation.state.routeName
if(routeName==='ReadStory'){
  return(
    <Image
    source={require('./assets/read.png')}
  style={{width:40,height:40}}/>
  )
}else if(routeName==='WriteStory'){
  return(
    <Image 
    source={require('./assets/write.png')}
    style={{width:40,height:40}}/>
  )
}
}
})}
);
const AppContainer = createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
