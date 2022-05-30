import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { HomeScreen, HotelsListScreen } from '../Screens';
import { DrawerStackParamsList, MainStackParamsList } from './types';

const Drawer = createDrawerNavigator<DrawerStackParamsList>();
const Stack = createNativeStackNavigator<MainStackParamsList>();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false,
      animation: 'slide_from_right',
    }}
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="HotelsListScreen" component={HotelsListScreen} />
    </Stack.Navigator>
  );
};

const DrawerStackNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Drawer.Screen name="MainStackNavigator" component={MainStackNavigator} />
      </Drawer.Navigator>
    </NavigationContainer>

  );
};

export default DrawerStackNavigator;
