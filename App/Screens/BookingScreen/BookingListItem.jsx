import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Colors from "../../Utils/Colors";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

export default function BookingListItem({ booking }) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.container}
    //   onPress={() => navigation.push("business-detail", { business: booking })}
    >
      <Image source={{ uri: booking.images[0].url }} style={styles.image} />
      <View style={styles.subContainer}>
        <Text
          style={{
            fontFamily: "outfit-regular",
            color: Colors.GRAY,
            fontSize: 15,
          }}
        >
          {booking.contactPerson}
        </Text>
        <Text
          style={{
            fontFamily: "outfit-bold",
            fontSize: 19,
          }}
        >
          {booking.name}
        </Text>
        <Text
          style={{
            color: Colors.PRIMARY,
            fontSize: 12,
            fontFamily: "outfit-regular",
            padding: 3,
            backgroundColor: Colors.PRIMARY_LIGHT,
            alignSelf: "flex-start",
            paddingHorizontal: 7,
            borderRadius:7,
          }}
        >
          {booking?.bookingStatus}
        </Text>
        {booking ? <Text
          style={{
            fontFamily: "outfit-regular",
            color: Colors.GRAY,
            fontSize: 14,
          }}
        >
          <AntDesign name="calendar" size={20} color={Colors.PRIMARY} style={{marginRight:10}} />
          {booking.date} at {booking.time}
        </Text> : null}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: Colors.WHITE,
    borderRadius: 15,
    marginBottom: 15,
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 12,
  },
  subContainer: {
    display: "flex",
    gap: 6,
  },
});
