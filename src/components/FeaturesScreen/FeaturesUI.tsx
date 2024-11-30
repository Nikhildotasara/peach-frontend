import React from 'react';
import { Image, Text, View } from 'react-native';

import FeaturesImage from '../../assets/images/featuresImage.webp'


import { BG_COLORS, FLEX, MAIN_CONTAINER } from '../../styles/baseStyles';
import { COPIES } from '../../constants/copiesConstants';
import CustomCTA from '../../elements/CustomCTA';

import { FONT_SIZES,FONT_ALIGNS,FONT_COLORS,FONT_WEIGHTS } from '../../constants/fontConstants';

function FeaturesUI(props) {

    const {handleGetStarted}=props;

  return (

    <View style={{...MAIN_CONTAINER,...FLEX.COL_SB_C,backgroundColor:BG_COLORS.SECONDARY}}>

        <View style={{borderWidth:0,borderColor:"red",...FLEX.COL_SB_C,gap:30}}>
            <Text style={{fontSize:FONT_SIZES.FeaturesScreen.appName,fontWeight:FONT_WEIGHTS.FeaturesScreen.appName}}>{COPIES.FeaturesScreen.appName}</Text>
            <Image source={FeaturesImage} alt="Image here" style={{width:400,height:400,objectFit:"contain"}} />
        </View>


        <View style={{borderWidth:0,borderColor:"red",...FLEX.COL_SB_C,paddingHorizontal:20,gap:27}}>

                <Text style={{fontSize:FONT_SIZES.FeaturesScreen.title1,textAlign:"center",color:FONT_COLORS.FeaturesScreen.title1,fontWeight:FONT_WEIGHTS.FeaturesScreen.title1}}>{COPIES.FeaturesScreen.title1}
                     <Text style={{color:FONT_COLORS.FeaturesScreen.title2}}>
                    {COPIES.FeaturesScreen.title2}
                    </Text>
                </Text>

            <Text style={{fontSize:FONT_SIZES.FeaturesScreen.description,textAlign:FONT_ALIGNS.FeaturesScreen.description,color:FONT_COLORS.FeaturesScreen.description}}>{COPIES.FeaturesScreen.description}</Text>

        </View>

        <View style={{borderWidth:0,borderColor:"red",...FLEX.COL_C_C,width:"100%",paddingHorizontal:20,marginBottom:10}}>
            <CustomCTA onPress={handleGetStarted} ctaText={COPIES.FeaturesScreen.ctaText}/>
        </View>

    </View>
  
  )
}

export default FeaturesUI;
