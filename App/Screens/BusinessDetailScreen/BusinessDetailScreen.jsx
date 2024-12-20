import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Modal,
  Linking,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useRoute, useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../Utils/Colors";
import Heading from "../../Comonents/Heading";
import BusinessPhoto from "./BusinessPhoto";
import BusinessAboutMe from "./BusinessAboutMe";
import BookingModal from "./BookingModal";

export default function BusinessDetailScreen() {
  const param = useRoute().params;
  const navigation = useNavigation();
  const [showModal, setShowModal] = useState(false);
  const [business, setBusiness] = useState(param.business);

  const onMessageBtnClick = () => {
    Linking.openURL('mailto:'+business.email+"?subject=I am Looking for your Service&body=HI There,")
  }

  useEffect(() => {
    // console.log(param.business);
  }, [param]);
  return (
    <View>
      <ScrollView style={{ height: "91%" }}>
        <TouchableOpacity
          style={styles.backBtnContainer}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back-outline" size={30} color="white" />
        </TouchableOpacity>
        <Image
          source={{ uri: business.images[0].url }}
          style={{ width: "100%", height: 300 }}
        />
        <View style={styles.infoContainer}>
          <Text
            style={{
              fontFamily: "outfit-bold",
              fontSize: 25,
            }}
          >
            {business.name}
          </Text>
          <View style={styles.subContainer}>
            <Text
              style={{
                fontFamily: "outfit-medium",
                color: Colors.PRIMARY,
                fontSize: 20,
              }}
            >
              {business.contactPerson}
            </Text>
            <Text
              style={{
                color: Colors.PRIMARY,
                backgroundColor: Colors.PRIMARY_LIGHT,
                padding: 5,
                borderRadius: 5,
                fontFamily: "outfit-regular",
                fontSize: 14,
              }}
            >
              {business.category.name}
            </Text>
          </View>
          <Text
            style={{
              fontSize: 17,
              fontFamily: "outfit-regular",
              color: Colors.GRAY,
            }}
          >
            <Ionicons name="location-sharp" size={20} color={Colors.PRIMARY} />
            {business.address}
          </Text>
          {/* Horizontal Line */}
          <View
            style={{
              borderWidth: 0.4,
              borderColor: Colors.GRAY,
              marginTop: 20,
              marginBottom: 20,
            }}
          ></View>
          {/* About Section */}
          <BusinessAboutMe business={business} />
          {/* Horizontal Line */}
          <View
            style={{
              borderWidth: 0.3,
              borderColor: Colors.GRAY,
              marginTop: 20,
              marginBottom: 20,
            }}
          ></View>
          <BusinessPhoto business={business} />
        </View>
      </ScrollView>
      <View
        style={{ display: "flex", flexDirection: "row", gap: 10, margin: 8 }}
      >
        <TouchableOpacity style={styles.messageBtn} onPress={()=>onMessageBtnClick()}>
          <Text
            style={{
              textAlign: "center",
              fontFamily: "outfit-medium",
              color: Colors.PRIMARY,
              fontSize: 15,
            }}
          >
            Message
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bookingBtn}
          onPress={() => setShowModal(true)}
        >
          <Text
            style={{
              textAlign: "center",
              fontFamily: "outfit-medium",
              color: Colors.WHITE,
              fontSize: 15,
            }}
          >
            Book Now
          </Text>
        </TouchableOpacity>
      </View>
      {/* Booking Screen Modal */}
      <Modal animationType="slide" visible={showModal}>
        <BookingModal hideModal={()=> setShowModal(false)} />
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  backBtnContainer: {
    position: "absolute",
    zIndex: 10,
    padding: 20,
  },
  infoContainer: {
    padding: 20,
    display: "flex",
    gap: 7,
  },
  subContainer: {
    display: "flex",
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
  },
  messageBtn: {
    padding: 14,
    backgroundColor: Colors.WHITE,
    borderWidth: 1,
    borderColor: Colors.PRIMARY,
    borderRadius: 99,
    flex: 1,
  },
  bookingBtn: {
    padding: 14,
    backgroundColor: Colors.PRIMARY,
    borderWidth: 1,
    borderColor: Colors.PRIMARY,
    borderRadius: 99,
    flex: 1,
  },
});
