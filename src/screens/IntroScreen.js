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
        <Image
        source={require('../assets/images/onboard.png')}
        style={{width: '100%', height: 250}}
        PlaceholderContent={<ActivityIndicator />}
        />
        <View style={styles.contentView}>
          <Button
            onPress={() => this.props.navigation.navigate('EmailInputScreen')}
            title="Get started"
            loading={false}
            loadingProps={{size: 'small', color: 'white'}}
            buttonStyle={{
              backgroundColor: '#7265E3',
              borderRadius: 5,
            }}
            titleStyle={{fontWeight: 'bold', fontSize: 23}}
            containerStyle={{marginVertical: 10, height: 50, width: 300}}
            underlayColor="transparent"
          />
          <Text h4 style={{textAlign: 'center', color: 'grey'}}>
            Already have an account?
          </Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('LoginScreen')}>
            <Text h4 style={{textAlign: 'center', color: 'blue'}}>
              Sign in
            </Text>
          </TouchableOpacity>
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
    top: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30
  },
  heading: {
    color: 'white',
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
  },
  contentView: {
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
});