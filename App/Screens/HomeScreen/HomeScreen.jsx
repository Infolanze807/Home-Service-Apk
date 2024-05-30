import { View, Text } from 'react-native'
import React from 'react'
import Header from './Header'
import Slider from './Slider'
import Categories from './Categories'
import BusinessList from './BusinessList'

export default function HomeScreen() {
  return (
    <View>
    {/* Herder */}
      <Header />
      {/* Slider */}
      <View style={{paddingTop:10, paddingLeft:20, paddingRight:20}}>
        <Slider />
        <Categories />
        <BusinessList />
      </View>
    </View>
  )
}