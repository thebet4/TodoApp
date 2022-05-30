import React, { ReactChild, ReactChildren } from 'react';
import { StatusBar as RNStatusBar, Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import {
  SafeAreaView,
  KeyboardAvoidingView,
} from './style';

interface IContainerProps {
  children?: ReactChild | ReactChildren;
}

const Container = ({ children }: IContainerProps) => {
  return (
    <SafeAreaView style={{
      paddingTop: RNStatusBar.currentHeight,
    }}
    >
      <StatusBar style="dark" />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        {children}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Container;
