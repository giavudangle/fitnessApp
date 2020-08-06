import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView, Dimensions
} from 'react-native';
import { Text, Icon, Input, Button, SocialIcon } from 'react-native-elements';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;




export default class LoginScreen extends Component {
  render() {
    return (
     
        <ScrollView
          contentContainerStyle={styles.container}
          keyboardShouldPersistTaps="handled"
        >
        <View style={styles.headerContainer}>
          <Icon
            name="md-fitness"
            size={80}
            type="ionicon"
            color={'#7265E2'}
          />
        </View>
        <View style={styles.wrapper}>
          <Input
            leftIcon={
              <Icon
                name="email-outline"
                type="material-community"
                color="rgba(110, 120, 170, 1)"
                size={25}
              />
            }
            placeholder="Email"
            inputContainerStyle={styles.input}
            placeholderTextColor="grey"
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="email-address"
            returnKeyType="next"
          />
          <Input
            leftIcon={
              <Icon
                name="lock"
                type="simple-line-icon"
                color="rgba(110, 120, 170, 1)"
                size={25}
              />
            }
            inputContainerStyle={styles.input}
            placeholderTextColor="grey"
            placeholder="Password"
            autoCapitalize="none"
            secureTextEntry={true}
            autoCorrect={false}
            keyboardType="default"
            returnKeyType="next"
          />
          </View>

        <View style={styles.socialWrapper}>
        <Text style={styles.signinwith}>Sign in with</Text>
        <View style={styles.socialLogin}>
          <SocialIcon type="facebook" light />
          <SocialIcon type="google" light />
          <SocialIcon type="twitter" light />
        </View>
        <Button
          title="Login"
          loading={false}
          loadingProps={{size: 'small', color: 'white'}}
          buttonStyle={{
            backgroundColor: '#7265E3',
            borderRadius: 15,
          }}
          titleStyle={{fontWeight: 'bold', fontSize: 23}}
          containerStyle={{marginVertical: 10, height: 50, width: 300}}
          onPress={() => console.log('aye')}
          underlayColor="transparent"
        />
      </View>
      <TouchableOpacity
        onPress={() =>
          this.props.navigation.navigate('ForgotPasswordScreen')
        }>
        <Text h5 style={{textAlign: 'center', color: 'blue'}}>
          Forgot Password?
        </Text>
      </TouchableOpacity>
        </ScrollView>
     
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F4F6FA',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapper:{
  },
  input: {
    borderWidth: 1,
    borderColor: 'white',
    borderLeftWidth: 0,
    height: 50,
    backgroundColor: 'white',
    marginBottom: 20,
    height:height/18,
    width:width/1.2,
    padding:20
  },
  socialWrapper: {
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  socialLogin: {
    flexDirection: 'row',
    marginTop: 10,
  },
})