import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigator from './TabNavigator';
import {StatusBar} from 'react-native';
import Welcome from '../screens/Welcome';
import ProfileScreen from '../screens/ProfileScreen';
import Verification from '../screens/OtpVerification';
import Signup from '../screens/Signup';
import Login from '../screens/Login';

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <StatusBar hidden />
      <Stack.Navigator screenOptions={{}} initialRouteName='Root'>

        <Stack.Screen name="Root" component={TabNavigator} options={{headerShown: false,}}/>
        <Stack.Screen name="Welcome" component={Welcome}/>
        <Stack.Screen name="ProfileScreen" component={ProfileScreen}/>
        <Stack.Screen name="Verification" component={Verification}/>
        <Stack.Screen name="Signup" component={Signup}/>
        <Stack.Screen name="Login" component={Login}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;