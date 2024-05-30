import { View, Text, FlatList } from 'react-native'
import React from 'react'
import Heading from '../../Comonents/Heading'
import BusinessListitemSmall from './BusinessListitemSmall';

export default function BusinessList() {

    const BusinessList =  {
        lists: [
            {
                id: "clwhldjop0p7e07och25mpfpi",
                name: "House Cleaning",
                email: "cleaning@gmail.com",
                contactPerson: "Jenny Wilson",
                category: {
                    name: "Cleaning"
                },
                address: "225 Grand Park Ave, New York",
                about: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis laborum perspiciatis minima est omnis asperiores eaque totam eius dolores aperiam. Nemo saepe sunt porro exercitationem natus! Nisi quo totam dolor.",
                images: [
                    {
                        url: "https://ap-south-1.graphassets.com/clwg3zuvm090i07o9hkf7d9z0/clwhlca290p0107o2jevgfejy"
                    }
                ]
            },
            {
                id: "clwhlmnva0p7z07o21x20dflt",
                name: "House Repairing",
                email: "repairing@gmail.com",
                contactPerson: "Jone Deo",
                category: {
                    name: "Repairing"
                },
                address: "520 Grand Park Society, New York",
                about: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis laborum perspiciatis minima est omnis asperiores eaque totam eius dolores aperiam. Nemo saepe sunt porro exercitationem natus! Nisi quo totam dolor.",
                images: [
                    {
                        url: "https://ap-south-1.graphassets.com/clwg3zuvm090i07o9hkf7d9z0/clwhllz7c0pg007ocmuud2sa2"
                    }
                ]
            },
            {
                id: "clwhli92h0p5t07o2nlcxpchd",
                name: "Washing Cloths",
                email: "washing@gmail.com",
                contactPerson: "Emma Potter",
                category: {
                    name: "Washing"
                },
                address: "525 N Tyron Street, New York",
                about: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis laborum perspiciatis minima est omnis asperiores eaque totam eius dolores aperiam. Nemo saepe sunt porro exercitationem natus! Nisi quo totam dolor.",
                images: [
                    {
                        url: "https://ap-south-1.graphassets.com/clwg3zuvm090i07o9hkf7d9z0/clwhlgwqn0p3h07o236qfxb71"
                    }
                ]
            },
        ]
    };

  return (
    <View style={{marginTop:20}}>
      <Heading text={'Latest Business'} isViewAll={true} />
      <FlatList
        data={BusinessList.lists}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => (
            <View style={{marginRight:10}}>
                <BusinessListitemSmall item={item} />
            </View>
        )}
       />
    </View>
  )
}