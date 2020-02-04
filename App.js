import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import {createAppContainer,createSwitchNavigator} from 'react-navigation'
import Screen1 from './screens/Screen1'
import Screen2 from './screens/Screen2'

const AppNavigator=createSwitchNavigator({
    Screen1,
    Screen2
});

export default createAppContainer(AppNavigator);