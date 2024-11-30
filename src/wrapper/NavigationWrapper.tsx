import React from 'react';
import {NavigationContainer}  from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


// importing compon
import StartScreen from '../pages/StartScreen/StartScreen';
import FeaturesScreen from '../pages/FeaturesScreen/FeaturesScreen';
import { Platform } from 'react-native';


function NavigationWrapper() {

    const Stack = createNativeStackNavigator();

  return (

    <NavigationContainer>

        <Stack.Navigator initialRouteName="StartScreen" screenOptions={{headerShown: false,animation:Platform.OS!="ios"?"fade":"default"}}>
            <Stack.Group>
                <Stack.Screen  component={StartScreen} name="StartScreen"/>
                <Stack.Screen  component={FeaturesScreen} name="FeaturesScreen"/>
            </Stack.Group>
        </Stack.Navigator>

    </NavigationContainer>
  );
}

export default NavigationWrapper;
