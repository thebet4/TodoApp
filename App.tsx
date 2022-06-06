import React from 'react';
import {
  ActivityIndicator, StatusBar,
} from 'react-native';
import 'react-native-gesture-handler';
import {
  NativeBaseProvider, extendTheme,
} from 'native-base';
import { ApolloProvider } from '@apollo/client';
import client from './src/Shared/Operations/config/ApolloConfig';
import { Router } from './src/Routing';
import { Colors } from './src/Ui/Theme';
import { Fonts, FontConfig } from './src/Ui/Typography/Fonts';

const App = () => {
  // Configure Colors and Fonts for the style guide
  const theme = extendTheme({
    fontConfig: FontConfig,
    fonts: Fonts,
    colors: Colors,
  });

  return (
    <NativeBaseProvider theme={theme}>
      <StatusBar backgroundColor={Colors.primary[500]} />
      <ApolloProvider client={client}>
        <Router />
      </ApolloProvider>
    </NativeBaseProvider>
  )
};

export default App;
