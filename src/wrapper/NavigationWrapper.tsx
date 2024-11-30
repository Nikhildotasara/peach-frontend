import React from 'react';
import {NavigationContainer}  from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


// importing compon
import StartScreen from '../pages/StartScreen/StartScreen';
import FeaturesScreen from '../pages/FeaturesScreen/FeaturesScreen';
import { Platform } from 'react-native';
import LoginScreen from '../pages/LoginScreen/LoginScreen';
import Onboarding from '../pages/Onboarding/Onboarding';
import HomeScreen from '../pages/HomeScreen/HomeScreen';


function NavigationWrapper() {

    const Stack = createNativeStackNavigator();

  return (

    <NavigationContainer>

        <Stack.Navigator initialRouteName="StartScreen" screenOptions={{headerShown: false,animation:Platform.OS!="ios"?"fade":"default"}}>
            <Stack.Group>
                <Stack.Screen  component={StartScreen} name="StartScreen"/>
                <Stack.Screen  component={FeaturesScreen} name="FeaturesScreen"/>
                <Stack.Screen  component={LoginScreen} name="LoginScreen"/>
                <Stack.Screen  component={Onboarding} name="OnboardingScreen"/>
                <Stack.Screen  component={HomeScreen} name="HomeScreen"/>
            </Stack.Group>
        </Stack.Navigator>

    </NavigationContainer>
  );
}

export default NavigationWrapper;
