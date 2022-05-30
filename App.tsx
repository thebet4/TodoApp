import React from 'react';
import { ActivityIndicator } from 'react-native';
import useAppLoader from './src/Shared/hooks/useAppLoader';
import loadFonts from './src/Shared/loadFonts';
import { HomeScreen } from './src/Screens';
import { Container } from './src/Ui/Containers';

const App = () => {
  const appLoaded = useAppLoader(loadFonts());

  if (!appLoaded) {
    return <ActivityIndicator />;
  }

  return (
    <Container>
      <HomeScreen />
    </Container>
  );
};

export default App;
