import React, { useEffect } from 'react';
import { View } from 'react-native';
import StartScreenUI from '../../components/StartScreen/StartScreenUI';
import { MAIN_CONTAINER } from '../../styles/baseStyles';

function StartScreen(props) {

    const {navigation}=props;

    useEffect(()=>{
        console.log('StartScreen');

        setTimeout(()=>{
          navigation.navigate('FeaturesScreen');
        },1500);
    },);

  return (
    <View style={{...MAIN_CONTAINER}}>
        <StartScreenUI/>
    </View>
  );
}

export default StartScreen;
