import React from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import { COPIES } from '../../constants/copiesConstants'
import CustomCTA from '../../elements/CustomCTA'
import { FLEX, MAIN_CONTAINER,BG_COLORS } from '../../styles/baseStyles'

import { FONT_SIZES,FONT_ALIGNS,FONT_COLORS,FONT_WEIGHTS } from '../../constants/fontConstants';

function LoginUI(props) {
    const {handleLogin}=props;
  return (
    <View style={{...MAIN_CONTAINER,...FLEX.COL_FS_C,paddingTop:140,backgroundColor:BG_COLORS.SECONDARY,gap:20}}>

        <View style={{...FLEX.COL_C_C,gap:10}}>
        <Text style={{fontSize:FONT_SIZES.LoginScreen.loginTitle,color:FONT_COLORS.LoginScreen.loginTitle,fontWeight:FONT_WEIGHTS.LoginScreen.loginTitle,textAlign:FONT_ALIGNS.LoginScreen.loginTitle}}>{COPIES.LoginScreen.loginTitle}</Text>
        
        <Text style={{fontSize:FONT_SIZES.LoginScreen.description,color:FONT_COLORS.LoginScreen.description,fontWeight:FONT_WEIGHTS.LoginScreen.description,textAlign:FONT_ALIGNS.LoginScreen.desciption}}>{COPIES.LoginScreen.description}</Text>
        </View>

        <View style={{paddingHorizontal:10,width:"100%",gap:20}}>

            <Text style={{fontSize:FONT_SIZES.LoginScreen.emailLabel,color:FONT_COLORS.LoginScreen.emailLabel,fontWeight:FONT_WEIGHTS.LoginScreen.emailLabel,textAlign:FONT_ALIGNS.LoginScreen.emailLabel}}>{COPIES.LoginScreen.emailLabel}</Text>
            
            <TextInput style={{borderWidth:1,borderColor:FONT_COLORS.LoginScreen.emailPlaceholder,backgroundColor:BG_COLORS.PRIMARY2,height:55,padding:10,borderRadius:10,fontSize:FONT_SIZES.LoginScreen.emailPlaceholder,color:FONT_COLORS.LoginScreen.emailPlaceholder}} placeholder={COPIES.LoginScreen.emailPlaceholder} />


            <Text style={{fontSize:FONT_SIZES.LoginScreen.passwordLabel,color:FONT_COLORS.LoginScreen.passwordLabel,fontWeight:FONT_WEIGHTS.LoginScreen.passwordLabel,textAlign:FONT_ALIGNS.LoginScreen.passwordLabel}}>{COPIES.LoginScreen.passwordLabel}</Text>
            <TextInput style={{borderWidth:1,borderColor:FONT_COLORS.LoginScreen.passwordPlaceholder,padding:10,borderRadius:10,height:55,fontSize:FONT_SIZES.LoginScreen.passwordPlaceholder,color:FONT_COLORS.LoginScreen.passwordPlaceholder,backgroundColor:BG_COLORS.PRIMARY2}} placeholder={COPIES.LoginScreen.passwordPlaceholder} />
            
            <TouchableOpacity style={{borderColor:FONT_COLORS.LoginScreen.resendOtp,alignSelf:'flex-end'}}>
                <Text style={{fontSize:FONT_SIZES.LoginScreen.resendOtp,color:FONT_COLORS.LoginScreen.resendOtp,fontWeight:FONT_WEIGHTS.LoginScreen.resendOtp,textAlign:FONT_ALIGNS.LoginScreen.resendOtp}}>{COPIES.LoginScreen.resendOtp}</Text>
            </TouchableOpacity>
        </View>

        <View style={{paddingHorizontal:5,width:"100%",gap:10}}>
        <CustomCTA onPress={handleLogin} ctaText={COPIES.LoginScreen.ctaText}/>
        </View>




    </View>
  )
}

export default LoginUI
