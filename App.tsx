import React from 'react';
import { ActivityIndicator } from 'react-native';
import {
  useFonts,
  Inter_300Light,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
} from '@expo-google-fonts/inter';
import { Container } from './src/Ui/Containers';
import 'react-native-gesture-handler';
import { Router } from './src/Routing';

const App = () => {
  const [fontsLoaded] = useFonts({
    Inter_300Light,
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
  });

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }

  return (
    <Container>
      <Router />
    </Container>
  );
};

export default App;
