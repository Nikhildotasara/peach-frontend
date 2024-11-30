import React from 'react'
import { Text, TouchableOpacity, View ,Image} from 'react-native'

import Male from './../../assets/images/male.webp';
import Female from './../../assets/images/female.webp';
import { BG_COLORS, COLORS, FLEX, MAIN_CONTAINER } from '../../styles/baseStyles';

function OnboardingStep1() {
  return (
    <View style={{...MAIN_CONTAINER,backgroundColor:BG_COLORS.SECONDARY,...FLEX.COL_SB_C}}>
    
    <View style={{gap:20,...FLEX.COL_C_C,borderWidth:1}}>
      <Text>Tell us about yourself</Text>
      <Text>To give you a better experience we need to know your gender</Text>
    </View>

        <View style={{gap:20}}>

            <TouchableOpacity style={{width:210,height:210,backgroundColor:BG_COLORS.PRIMARY,borderRadius:130,...FLEX.ROW_C_C}}>
                <Image style={{objectFit:'contain',width:"70%",height:"70%"}} source={Male} alt="Male"/>
            </TouchableOpacity>

            <TouchableOpacity style={{width:210,height:210,backgroundColor:BG_COLORS.PRIMARY,borderRadius:130,...FLEX.ROW_C_C}}>
                <Image style={{objectFit:'contain',width:"70%",height:"70%"}} source={Female} alt="Male"/>
            </TouchableOpacity>

        </View>

    </View>
  )
}

export default OnboardingStep1
