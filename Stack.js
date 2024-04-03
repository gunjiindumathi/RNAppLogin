// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import GetStartedScreen from '../pages/GetStarted';
import UserDetailsScreen from '../pages/UserDetailsScreen';
import BottomTabNavigator from './BottomTabNavigator';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="GetStarted">
        <Stack.Screen component={GetStartedScreen} name='GetStarted' />
        <Stack.Screen component={UserDetailsScreen} name='UserDetails' />
      </Stack.Navigator>
      <BottomTabNavigator />
    </NavigationContainer>
  );
}
// AppRegistry.registerComponent('MyApp', () => App);
export default App;