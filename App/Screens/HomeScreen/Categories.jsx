import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Heading from "../../Comonents/Heading";
import Colors from "../../Utils/Colors";
import { useNavigation } from "@react-navigation/native";

export default function Categories() {
  const CategoryData = {
    categories: [
      {
        id: "clwhh9xmn0m1l07o25hniqn3e",
        name: "Cleaning",
        icon: {
          url: "https://ap-south-1.graphassets.com/clwg3zuvm090i07o9hkf7d9z0/clwhh9tln0mb407ocau0zp866",
        },
      },
      {
        id: "clwhhamxx0md107ockn80negr",
        name: "Repairing",
        icon: {
          url: "https://ap-south-1.graphassets.com/clwg3zuvm090i07o9hkf7d9z0/clwhhb7dj0me707occzj92omg",
        },
      },
      {
        id: "clwhhcc8p0mgg07oceb2vc5cf",
        name: "Painting",
        icon: {
          url: "https://ap-south-1.graphassets.com/clwg3zuvm090i07o9hkf7d9z0/clwhhc7rx0m6j07o20kjo1qow",
        },
      },
      {
        id: "clwhhcylh0m8h07o25uma5kza",
        name: "Shifting",
        icon: {
          url: "https://ap-south-1.graphassets.com/clwg3zuvm090i07o9hkf7d9z0/clwhhcvar0mh607ocb38fx2al",
        },
      },
    ],
  };

  const navigation = useNavigation();

  return (
    <View style={{ marginTop: 10 }}>
      <Heading text={"Categories"} isViewAll={true} />
      <FlatList
        numColumns={4}
        data={CategoryData.categories}
        renderItem={({ item, index }) =>
          index <= 3 && (
            <TouchableOpacity
              style={styles.container}
              onPress={() =>
                navigation.push("business-list", { category: item.name })
              }
            >
              <View style={styles.iconContainer}>
                <Image
                  source={{ uri: item.icon.url }}
                  style={{ width: 30, height: 30 }}
                />
              </View>
              <Text style={{ 
                fontFamily: "outfit-medium", 
              marginTop: 5 }}>
                {item.name}
              </Text>
            </TouchableOpacity>
          )
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  iconContainer: {
    backgroundColor: Colors.LIGHT_GRAY,
    padding: 17,
    borderRadius: 99,
  },
});
