import { View, Text, FlatList } from "react-native";
import React, { useEffect } from "react";
import { useRoute, useNavigation } from "@react-navigation/native";
// import { Ionicons } from "@expo/vector-icons";
// import { TouchableOpacity } from "react-native-gesture-handler";
import BusinessListItem from "./BusinessListItem";
import PageHeading from "../../Comonents/PageHeading";

export default function BusinessListByCategoryList() {
  const param = useRoute().params;
  const navigation = useNavigation();

  useEffect(() => {
    console.log("category", param.category);
  }, []);

  const BusinessCategory = {
    Category: [
      {
        id: "clwhldjop0p7e07och25mpfpi",
        name: "House Cleaning",
        email: "cleaning@gmail.com",
        contactPerson: "Jenny Wilson",
        category: {
          name: "Cleaning",
        },
        address: "225 Grand Park, New York",
        about:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis laborum perspiciatis minima est omnis asperiores eaque totam eius dolores aperiam. Nemo saepe sunt porro exercitationem natus! Nisi quo totam dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit Necessitatibus.",
        images: [
          {
            url: "https://ap-south-1.graphassets.com/clwg3zuvm090i07o9hkf7d9z0/clwhlca290p0107o2jevgfejy",
          },
          {
            url: "https://ap-south-1.graphassets.com/clwg3zuvm090i07o9hkf7d9z0/clwhlgwqn0p3h07o236qfxb71",
          },
        ],
      },
      {
        id: "clwhldjop0p7e07och25mpfpz",
        name: "House Cleaning",
        email: "cleaning@gmail.com",
        contactPerson: "Jenny Wilson",
        category: {
          name: "Cleaning",
        },
        address: "225 Grand Park, New York",
        about:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis laborum perspiciatis minima est omnis asperiores eaque totam eius dolores aperiam. Nemo saepe sunt porro exercitationem natus! Nisi quo totam dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus consequatur accusamus a, quam earum aliquid reprehenderit animi officia in? Consequuntur necessitatibus placeat consectetur excepturi voluptate tempora itaque impedit odio! Repellendus!",
        images: [
          {
            url: "https://ap-south-1.graphassets.com/clwg3zuvm090i07o9hkf7d9z0/clwhlca290p0107o2jevgfejy",
          },
        ],
      },
      {
        id: "clwhlmnva0p7z07o21x20dflt",
        name: "House Repairing",
        email: "repairing@gmail.com",
        contactPerson: "Jone Deo",
        category: {
          name: "Repairing",
        },
        address: "520 Park Society, New York",
        about:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis laborum perspiciatis minima est omnis asperiores eaque totam eius dolores aperiam. Nemo saepe sunt porro exercitationem natus! Nisi quo totam dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus consequatur accusamus a, quam earum aliquid reprehenderit animi officia in? Consequuntur necessitatibus placeat consectetur excepturi voluptate tempora itaque impedit odio! Repellendus!",
        images: [
          {
            url: "https://ap-south-1.graphassets.com/clwg3zuvm090i07o9hkf7d9z0/clwhllz7c0pg007ocmuud2sa2",
          },
        ],
      },
      {
        id: "clwhli92h0p5t07o2nlcxpchd",
        name: "Painting",
        email: "washing@gmail.com",
        contactPerson: "Emma Potter",
        category: {
          name: "Painting",
        },
        address: "525 N Tyron Street, New York",
        about:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis laborum perspiciatis minima est omnis asperiores eaque totam eius dolores aperiam. Nemo saepe sunt porro exercitationem natus! Nisi quo totam dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus consequatur accusamus a, quam earum aliquid reprehenderit animi officia in? Consequuntur necessitatibus placeat consectetur excepturi voluptate tempora itaque impedit odio! Repellendus!",
        images: [
          {
            url: "https://ap-south-1.graphassets.com/clwg3zuvm090i07o9hkf7d9z0/clwhlgwqn0p3h07o236qfxb71",
          },
        ],
      },
      {
        id: "clwhldjop0p7e07och25mpfpa",
        name: "House Shifting",
        email: "cleaning@gmail.com",
        contactPerson: "Jenny Wilson",
        category: {
          name: "Shifting",
        },
        address: "225 Grand Park, New York",
        about:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis laborum perspiciatis minima est omnis asperiores eaque totam eius dolores aperiam. Nemo saepe sunt porro exercitationem natus! Nisi quo totam dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus consequatur accusamus a, quam earum aliquid reprehenderit animi officia in? Consequuntur necessitatibus placeat consectetur excepturi voluptate tempora itaque impedit odio! Repellendus!",
        images: [
          {
            url: "https://ap-south-1.graphassets.com/clwg3zuvm090i07o9hkf7d9z0/clwhlca290p0107o2jevgfejy",
          },
        ],
      },
    ],
  };

  const filteredBusinesses = BusinessCategory.Category.filter(
    (business) => business.category.name === param.category
  );

  return (
    <View style={{ padding: 20, paddingTop: 30 }}>
        <PageHeading title={param.category} />
      <FlatList
        style={{ marginTop: 15 }}
        data={filteredBusinesses}
        renderItem={({ item, index }) => <BusinessListItem business={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
