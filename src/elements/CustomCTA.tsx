import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { BG_COLORS, FLEX } from '../styles/baseStyles';

function CustomCTA(props) {

    const {ctaText,onPress}=props;

  return (
    <TouchableOpacity onPress={onPress} style={{backgroundColor:BG_COLORS.CTA_PRIMARY,padding:17,borderRadius:25,marginTop:50,width:"100%",...FLEX.ROW_C_C}}>
      <Text style={{fontSize:20,color:'#fff',textAlign:"center"}}>{ctaText}</Text>
    </TouchableOpacity>
  )
}

export default CustomCTA;
