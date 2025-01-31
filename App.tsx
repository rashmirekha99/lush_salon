
import React from 'react';


import { SafeAreaView, Text } from 'react-native';
import Onboarding from './src/screens/onboarding/Onboarding';
import ServiceSelection from './src/screens/onboarding/ServiceSelection';
import IndividualSelection from './src/screens/onboarding/IndividualSelection';

function App(): React.JSX.Element {
  
  return (
    <IndividualSelection/>
  );
}


export default App;
