import {create, createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import EmailInputScreen from '../screens/EmailInputScreen';
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
  PasswordInputScreen:PasswordInputScreen,
 },{initialRouteName:'EmailInputScreen'});

export default createAppContainer(StackNavigator);