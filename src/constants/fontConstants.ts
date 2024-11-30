import { BG_COLORS, COLORS } from '../styles/baseStyles';

export const FONT_SIZES = {
    StartScreen: {
        title: 42,
    },
    FeaturesScreen: {
        appName:42,
        title1: 39,
        title2:39,
        description:18,
        ctaText:18,
        alreadyAccount:18,
    },
    LoginScreen:{
        loginTitle:40,
        description:18,
        emailLabel:22,
        emailPlaceholder:20,
        passwordLabel:22,
        passwordPlaceholder:18,
        resendOtp:20,
        ctaText:18,
    },
    OtpScreen:{
        title:40,
        description:18,
        otpLabel:22,
        otpPlaceholder:20,
        resendOtp:20,
        ctaText:18,
    }
};


export const FONT_WEIGHTS = {
    StartScreen: {
        title: '400',
    },
    FeaturesScreen: { 
        appName:'500', 
        title1: '500',
        title2:'500',
        description:'400',
        ctaText:'400',
        alreadyAccount:'400',
    },
    LoginScreen:{
        loginTitle:'500',
        emailLabel:'400',
        description:'400',
        emailPlaceholder:'400',
        passwordLabel:'400',
        passwordPlaceholder:'500',
        resendOtp:'500',
    },
    OtpScreen:{
        title:'500',
        description:'400',
        otpLabel:'400',
        otpPlaceholder:'400',
        resendOtp:'400', 
    }   
};

export const FONT_COLORS = {
    StartScreen: {
        title: COLORS.PRIMARY,
    },
    FeaturesScreen: {
        title1: BG_COLORS.PRIMARY,
        title2:COLORS.SECONDARY,
        description:COLORS.SECONDARY,
        ctaText:COLORS.PRIMARY,
        alreadyAccount:COLORS.SECONDARY,
    },
    LoginScreen:{
        loginTitle:COLORS.SECONDARY,
        description:COLORS.SECONDARY,
        emailLabel:COLORS.SECONDARY,
        emailPlaceholder:COLORS.SECONDARY,
        passwordLabel:COLORS.SECONDARY,
        passwordPlaceholder:COLORS.SECONDARY,
        resendOtp:BG_COLORS.PRIMARY,
    },
    OtpScreen:{
        title:COLORS.PRIMARY,
        description:COLORS.SECONDARY,
        otpLabel:COLORS.SECONDARY,
        otpPlaceholder:COLORS.SECONDARY,    
        resendOtp:COLORS.SECONDARY, 
    }
};


export const FONT_ALIGNS = {
    StartScreen: {
        title: 'center',
    },
    FeaturesScreen: {
        title1: 'center',
        title2:'center',
        description:'center',
        ctaText:'center',
        alreadyAccount:'center',
    },
    LoginScreen:{
        loginTitle:'center',
        desciption:'center',
        emailLabel:'flex-start',
        emailPlaceholder:'center',
        passwordLabel:'flex-start',
        passwordPlaceholder:'center',
        resendOtp:'center',
    },
    OtpScreen:{
        title:'center',
        description:'center',
        otpLabel:'flex-start',
        otpPlaceholder:'center',    
        resendOtp:'center',
    }
};


export const FONT_FAMILY={
    StartScreen:{
        title:'Poppins.ttf'
    }
}