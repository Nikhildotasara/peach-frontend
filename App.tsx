import React from 'react';
import { StatusBar, View } from 'react-native';


import NavigationWrapper from './src/wrapper/NavigationWrapper';
import { BG_COLORS, MAIN_CONTAINER } from './src/styles/baseStyles';

function App() {
  return (
    <View style={{...MAIN_CONTAINER}}>
      <StatusBar barStyle="light-content" backgroundColor={BG_COLORS.PRIMARY}/>
      <NavigationWrapper/>
    </View>
  );
}

export default App;
