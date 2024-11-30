import React from 'react';
import { Text, View } from 'react-native';
import { FLEX,BG_COLORS, MAIN_CONTAINER } from '../../styles/baseStyles';
import { COPIES } from '../../constants/copiesConstants';
import { FONT_SIZES, FONT_WEIGHTS, FONT_COLORS, FONT_ALIGNS, FONT_FAMILY } from '../../constants/fontConstants';

function StartScreenUI() {
  return (
    <View style={{...MAIN_CONTAINER,...FLEX.COL_C_C,backgroundColor:BG_COLORS.PRIMARY}}>
      <Text style={{fontSize:FONT_SIZES.StartScreen.title,color:FONT_COLORS.StartScreen.title,fontWeight:FONT_WEIGHTS.StartScreen.title,textAlign:FONT_ALIGNS.StartScreen.title,fontFamily:FONT_FAMILY.StartScreen.title}}>{COPIES.StartScreen.title}</Text>
    </View>
  );
}

export default StartScreenUI;
