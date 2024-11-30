import React from 'react'
import { View } from 'react-native'
import OnboardingUI from '../../components/Onboarding/OnboardingUI'
import { MAIN_CONTAINER } from '../../styles/baseStyles'

function Onboarding() {
  return (
    <View style={{...MAIN_CONTAINER}}>
      <OnboardingUI/>
    </View>
  )
}

export default Onboarding
