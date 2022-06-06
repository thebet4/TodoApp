/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native';
import { CheckCircleIcon } from 'native-base';
import { TasksScreen } from '../Screens';
import { TabStackNavigatorParamsList } from './types';
import { TabBarItem } from '../Ui/Components';
import {
  CalendarIcon, ListIcon, SunIcon,
} from '../Ui/Sgvs';

const Tab = createBottomTabNavigator<TabStackNavigatorParamsList>();

const TabStackNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            height: 70,
          },
        }}
      >
        <Tab.Screen
          name="MyDayScreen"
          component={TasksScreen}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <TabBarItem
                  label="My Day"
                  focused={focused}
                  Icon={SunIcon}
                />
              )
            },
          }}
        />
        <Tab.Screen
          name="CalendarScreen"
          component={TasksScreen}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <TabBarItem
                  label="Calendar"
                  focused={focused}
                  Icon={CalendarIcon}
                />
              )
            },
          }}
        />
        <Tab.Screen
          name="TasksScreen"
          component={TasksScreen}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <TabBarItem
                  label="Tasks"
                  focused={focused}
                  Icon={CheckCircleIcon}
                />
              )
            },
          }}
        />
        <Tab.Screen
          name="ListsScreen"
          component={TasksScreen}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <TabBarItem
                  label="Lists"
                  focused={focused}
                  Icon={ListIcon}
                />
              )
            },
          }}
        />

      </Tab.Navigator>
    </NavigationContainer>

  )
}

export default TabStackNavigator;
