import React, {Component} from 'react';
import {View,StyleSheet,ActivityIndicator,TouchableOpacity} from 'react-native';

import {Text,Icon,Image,Button} from 'react-native-elements';


export default class IntroScreen extends Component{
  render(){
    return(
      <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Icon name="md-fitness" size={80} type="ionicon" />
        <Text h4>Welcome to Fitness </Text>
        <Text h5 style={{textAlign: 'center'}}>
          The best App for track Fitness workout and Meal planner
        </Text>
      </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F4F6FA',height:'100%',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  headerContainer: {
    top: 30,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40
  },
});