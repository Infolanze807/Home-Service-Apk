import { View, Text, FlatList } from 'react-native'
import React from 'react'
import BookingListItem from './BookingListItem';

const bookingData = {
    bookings: [
      {
        time: "12:00 PM",
        userEmail: "nishant@gmail.com",
        userName: "Nishant Timbadiya",
        bookingStatus: "Booked",
        date: "01 June 2024",
        id: "clwrfnq990c2y07o9zmbohoqd",
        businessList: {
          id: "clwhlmnva0p7z07o21x20dflt",
          images: [
            {
              url: "https://ap-south-1.graphassets.com/clwg3zuvm090i07o9hkf7d9z0/clwhllz7c0pg007ocmuud2sa2",
            }
          ],
          name: "House Reparing",
          bookingStatus: "Booked",
          date: "01 June 2024",
          time: "11:30 PM",
          address: "520 Grand Park, New York",
          contactPerson: "Jone Deo",
          email: "reparing@gmail.com"
        }
      },
      {
        time: "12:00 PM",
        userEmail: "sahil@gmail.com",
        userName: "Sahil Viradiya",
        bookingStatus: "Booked",
        date: "02 June 2024",
        id: "clwrflmku0c0507o9mv0dj5ma",
        businessList: {
          id: "clwhli92h0p5t07o2nlcxpchd",
          images: [
            {
              url: "https://ap-south-1.graphassets.com/clwg3zuvm090i07o9hkf7d9z0/clwhlgwqn0p3h07o236qfxb71",
            }
          ],
          name: "Washing Cloths",
          bookingStatus: "Booked",
          date: "02 June 2024",
          time: "12:00 PM",
          address: "525 Tyron Street, New York",
          contactPerson: "Emma Potter",
          email: "washing@gmail.com"
        }
      },
      {
        time: "12:00 PM",
        userEmail: "nishant@gmail.com",
        userName: "Nishant Timbadiya",
        bookingStatus: "Booked",
        date: "01 June 2024",
        id: "clwrfnq990c2y07o9zmbohoqa",
        businessList: {
          id: "clwhlmnva0p7z07o21x20dfla",
          images: [
            {
              url: "https://ap-south-1.graphassets.com/clwg3zuvm090i07o9hkf7d9z0/clwhllz7c0pg007ocmuud2sa2",
            }
          ],
          name: "House Cleaning",
          bookingStatus: "Booked",
          date: "03 July 2024",
          time: "08:00 PM",
          address: "520 Grand Park, New York",
          contactPerson: "Jone Deo",
          email: "reparing@gmail.com"
        }
      },
    ]
};

export default function BookingScreen() {
  return (
    <View style={{padding:20}}>
      <Text style={{fontFamily:'outfit-medium', fontSize:26, paddingBottom:10}}>My Bookings</Text>
      <View>
        <FlatList
          data={bookingData.bookings}
          renderItem={({item, index})=> (
            // <BusinessListItem business={item.businessList} />
            <BookingListItem booking={item.businessList} />
          )}
        />
      </View>
    </View>
  )
}