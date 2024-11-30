import React from 'react'
import { Text, TextInput, View } from 'react-native'
import { BG_COLORS, COLORS, FLEX, MAIN_CONTAINER } from '../../styles/baseStyles'
import CustomCTA from '../../elements/CustomCTA'

function OtpUI() {
  return (
    <View style={{...MAIN_CONTAINER,...FLEX.COL_FS_C,backgroundColor:BG_COLORS.SECONDARY,paddingTop:140,gap:20}}>
      
      <View style={{...FLEX.COL_C_C,gap:10}}>
        <Text style={{fontSize:40,color:COLORS.SECONDARY,fontWeight:500,textAlign:'center'}}>OTP</Text>
        <Text style={{fontSize:18,color:COLORS.SECONDARY,fontWeight:400,textAlign:'center'}}>Enter OTP sent to your registered email</Text>
      </View>

      <View>

        <View>
        <TextInput placeholder="Enter OTP" />
        </View>

        <View>
        <Text>Didn't receive OTP?</Text>
        <Text>Resend OTP</Text>
        </View>

      </View>

      <View>
        <CustomCTA ctaText="Login"/>
      </View>
      
    </View>
  )
}

export default OtpUI
