import React from 'react'
import { SafeAreaView } from 'react-native';
import { BoxObjectModelScreen } from './src/screens/BoxObjectModelScreen';
import { ContadorScreen } from './src/screens/ContadorScreen';
import { HolaMundoScreen } from './src/screens/HolaMundoScreen';
import { DimensionesScreen } from './src/screens/DimensionesScreen';
import { PositionScreen } from './src/screens/PositionScreen';
import { FlexScreen } from './src/screens/FlexScreen';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ContadorScreen />
      {/*<BoxObjectModelScreen/>*/}
      {/*<DimensionesScreen/>*/}
      {/*<PositionScreen/>*/}
     
    </SafeAreaView>
    

  )
}

export default App;
