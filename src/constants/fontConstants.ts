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
    }
};

export const FONT_FAMILY={
    StartScreen:{
        title:'Poppins.ttf'
    }
}