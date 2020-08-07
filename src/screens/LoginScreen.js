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
import firebase from 'react-native-firebase';
import { Formik } from 'formik';
import * as Yup from 'yup';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const auth = firebase.auth();


const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Email is required'),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters')
});



export default class LoginScreen extends Component {
  
  render() {
     
    const Login = (values,navigation) => {
     auth
     .signInWithEmailAndPassword(values.email,values.password)
     .then(response => {
       let {user} = response;
       this.setState({user});
   
       alert('Login Successfully')
   
       setTimeout(() => {
         navigation.navigate('HomeScreen');
       },2000);
     })
     .catch(err => {
       alert(err);
     })
   } 
   
    
    return (
      <Formik
        initialValues={{email:'',password:''}}
        onSubmit={(values,{setSubmitting}) => {
          Login(values,this.props.navigation)
          setSubmitting(false);
        }}
        validationSchema={LoginSchema}
      >
      {
        formilkProps =>(
          <React.Fragment>
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
              onChangeText={formilkProps.handleChange('email')}
            />
            {formilkProps.errors.email  
              ? (<Text style={{color:'red'}}>{formilkProps.errors.email}</Text>)
              : null
            }
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
              onChangeText={formilkProps.handleChange('password')}
            />
            {formilkProps.errors.password 
              ? (<Text style={{color:'red'}}>{formilkProps.errors.password}</Text>)
              : null
            }
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
              loadingProps={{ size: 'small', color: 'white' }}
              buttonStyle={{
                backgroundColor: '#7265E3',
                borderRadius: 15,
              }}
              titleStyle={{ fontWeight: 'bold', fontSize: 23 }}
              containerStyle={{ marginVertical: 10, height: 50, width: 300 }}              
              underlayColor="transparent"
              onPress={formilkProps.handleSubmit}
              disabled={!(formilkProps.isValid && formilkProps.dirty)}
            />
          </View>
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate('ForgotPasswordScreen')
            }>
            <Text h5 style={{ textAlign: 'center', color: 'blue' }}>
              Forgot Password?
          </Text>
          </TouchableOpacity>
        </ScrollView>
          </React.Fragment>
        )
      }


      
      </Formik>
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
  wrapper: {
  },
  headerContainer: {
    top: -30
  }
  ,
  input: {
    borderWidth: 1,
    borderColor: 'white',
    borderLeftWidth: 0,
    height: 50,
    backgroundColor: 'white',
    marginBottom: 20,
    height: height / 18,
    width: width / 1.2,
    padding: 20
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