// import NavigationContainer, {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  ImageComponent,
  SafeAreaView,
  navigation,
  ImageBackground,
  TouchableOpacity,
  Button,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import UserDetailsScreen from '../pages/UserDetailsScreen';

const GetStarted = () => {
  // const navigation = useNavigation();

  const goToLogin = () => {
    navigation.navigate('UserDetailsScreen');
  };

  return (
    <SafeAreaView>
      <ImageBackground
        source={require('../../RNAppLogin/pages/assets/bgimage.jpg')}
        style={styles.bgcolor}
        resizeMode="cover">
        <TouchableOpacity
          style={styles.mainContainer}
          // onPress={goToLogin}
        >
          <Text style={styles.buttonText}>Get Start</Text>
        </TouchableOpacity>
        {/* <Button style={styles.signup} title="Sign Up" onPress={goToDetails} /> */}
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bgcolor: {
    height: '100%',
  },
  buttonText: {
    color: 'blue',
    fontSize: 25,
    borderWidth: 2,
    borderRadius: 12,
    borderColor: 'blue',
    width: '50%',
    textAlign: 'center',
    backgroundColor: 'lightblue',
  },
});
export default GetStarted;
