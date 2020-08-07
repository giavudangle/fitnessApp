import {create, createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import EmailInputScreen from '../screens/EmailInputScreen';
import HomeScreen from '../screens/HomeScreen';
import IntroScreen from '../screens/IntroScreen';
import LoginScreen from '../screens/LoginScreen';

import PasswordInputScreen from '../screens/PasswordInputScreen';


const StackNavigator = createStackNavigator({
  IntroScreen: {
    screen:IntroScreen,
    navigationOptions:{header:null},
  
  },
  LoginScreen: {
    screen:LoginScreen,
    navigationOptions:{headerShown:false}
  },
  EmailInputScreen:EmailInputScreen,
  HomeScreen:HomeScreen,
  PasswordInputScreen:PasswordInputScreen,
  
 },{initialRouteName:'LoginScreen'});

export default createAppContainer(StackNavigator);