import React from 'react'
import {  View } from 'react-native'
import OnboardingStep1 from './OnboardingStep1'
import { MAIN_CONTAINER } from '../../styles/baseStyles'

function OnboardingUI() {
  return (
    <View style={{...MAIN_CONTAINER}}>
      <OnboardingStep1/>

    </View>
  )
}

export default OnboardingUI
