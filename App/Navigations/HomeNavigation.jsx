import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import BusinessListByCategoryList from '../Screens/BusinessListByCategoryList/BusinessListByCategoryList';
import BusinessDetailScreen from '../Screens/BusinessDetailScreen/BusinessDetailScreen';

const Stack = createStackNavigator();

export default function HomeNavigation() {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name='home' component={HomeScreen} />
        <Stack.Screen name='business-list' component={BusinessListByCategoryList} />
        <Stack.Screen name='business-detail' component={BusinessDetailScreen} />
    </Stack.Navigator>
  )
}