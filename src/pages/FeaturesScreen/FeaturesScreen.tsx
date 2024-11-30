import React from 'react'
import { View } from 'react-native'
import FeaturesUI from '../../components/FeaturesScreen/FeaturesUI'
import { MAIN_CONTAINER } from '../../styles/baseStyles';

function FeaturesScreen(props) {

    const {navigation}=props;

    const handleGetStarted=()=>{
        navigation.navigate("StartScreen");
    }

  return (
    <View style={{...MAIN_CONTAINER}}>
        <FeaturesUI handleGetStarted={handleGetStarted}/>
    </View>
  )
}

export default FeaturesScreen;
