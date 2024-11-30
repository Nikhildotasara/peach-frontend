import React,{useState} from 'react'

import LoginUI from '../../components/LoginScreen/LoginUI'
import OtpUI from '../../components/LoginScreen/OtpUI'
import { Text, View } from 'react-native'
import { MAIN_CONTAINER } from '../../styles/baseStyles'

function LoginScreen(props) {
    const {navigation}=props;

    const [otpSent,setOtpSent]=useState(false);

    const handleLogin=()=>{
        console.log('Login');
        navigation.navigate('HomeScreen');
    }


  return (
    <View style={{...MAIN_CONTAINER}}>

        <LoginUI handleLogin={handleLogin}/>

    </View>
  )
}

export default LoginScreen
