import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import Heading from '../../Comonents/Heading';
// import GlobalApi from '../../Utils/GlobalApi'

export default function Slider() {

  // useEffect(() => {
  //   getSlider();
  // },[])

  // const getSlider = () => {
  //   GlobalApi.getSlider().then(resp => {
  //     console.log("resp", resp);
  //   });
  // }

  const SliderData = {
    sliders: [
      {
        id: "clwg6jub40h5o07pe3inwvb2t",
        name: "Slider 1",
        image: {
          url: "https://ap-south-1.graphassets.com/clwg3zuvm090i07o9hkf7d9z0/clwhgyall0m3y07oc2lfynavm",
        },
      },
      {
        id: "clwg6lom80h1u0co5ytbb2bsf",
        name: "Slider 2",
        image: {
          url: "https://ap-south-1.graphassets.com/clwg3zuvm090i07o9hkf7d9z0/clwhgyvxl0m5607oc57lnble5",
        },
      },{
        id: "clwg6jub40h5o07pe3inwvb2e",
        name: "Slider 1",
        image: {
          url: "https://ap-south-1.graphassets.com/clwg3zuvm090i07o9hkf7d9z0/clwhgyall0m3y07oc2lfynavm",
        },
      },
    ],
  };

  const renderItem = ({ item }) => (
    <View style={{ marginRight: 20 }}>
      <Image source={{ uri: item.image.url }} style={styles.sliderImage} />
    </View>
  );

  return (
    <View>
      <Heading text={'Offers For You'}/>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={SliderData.sliders}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  heading:{
    fontSize:20,
    fontFamily: "outfit-medium",
    marginBottom: 10,
  },
  sliderImage:{
    width:270,
    height:122,
    borderRadius:20,
    objectFit: "contain",
  }
})
