  import { View, Text, Image, FlatList, TouchableOpacity, Linking } from "react-native";
  import React from "react";
  import { Ionicons } from "@expo/vector-icons";
  import { useUser, useClerk } from "@clerk/clerk-expo";
  import Colors from "./../../Utils/Colors";
  import { useNavigation } from '@react-navigation/native';

  export default function ProfileScreen() {
    const { user } = useUser();
    const { signOut } = useClerk(); 
    const navigation = useNavigation();

    const profileMenu = [
      {
        id: 1,
        name: "Home",
        icon: "home",
        action: () => {
          navigation.navigate('home');
        },
      },
      {
        id: 2,
        name: "My Booking",
        icon: "bookmark-sharp",
        action: () => {
          navigation.navigate('booking');
        },
      },
      {
        id: 3,
        name: "E-Mail",
        icon: "mail",
        action: onMessageBtnClick = () => {
          Linking.openURL('mailto:'+"infolanze.tech@gmail.com"+"?subject=I Need Customer Service&body=Hi There,")
        }
      },
      {
        id: 4,
        name: "Logout",
        icon: "log-out",
        action: async () => {
          await signOut();
          navigation.replace('Login');
        },
      },
    ];

    return (
      <View>
        <View
          style={{ padding: 20, paddingTop: 30, backgroundColor: Colors.PRIMARY }}
        >
          <Text style={{ fontSize: 20, fontFamily: "outfit-bold", color:Colors.WHITE }}>Profile</Text>
          <View
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: 20,
            }}
          >
            <Image
              source={{ uri: user.imageUrl }}
              style={{ width: 70, height: 70, borderRadius: 99 }}
            />
            <Text style={{fontSize:26, marginTop:8, fontFamily:'outfit-medium', color:Colors.WHITE}}>{user.fullName}</Text>
            <Text style={{fontSize:18, marginTop:8, fontFamily:'outfit-medium', color:Colors.WHITE}}>{user.primaryEmailAddress.emailAddress}</Text>
          </View>
        </View>
        <View style={{paddingTop:60}}>
          <FlatList
            data={profileMenu}
            renderItem={({item, index}) => (
              <TouchableOpacity onPress={item.action} style={{display:'flex', flexDirection:'row', alignItems:'center', gap:10, marginBottom:20, paddingHorizontal:80}}>
                <Ionicons name={item.icon} size={35} color={Colors.PRIMARY} />
                <Text style={{fontFamily: 'outfit-regular', fontSize:20}}>{item.name}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
      </View>
    );
  }
