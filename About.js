import { ScrollView, StyleSheet, Text, View, Image } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";
import React from "react";


const About = () => {
  const navigation = useNavigation();
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: "white",
        marginTop: 0,
        marginHorizontal: 10,
      }}
      contentContainerStyle={{ justifyContent: "space-evenly" }}
    >
      <Icon
        name="leftcircle"
        size={26}
        color={"#FFA500"}
        style={{ top: 5, left: 10, zIndex: 1, position: "absolute" }}
        onPress={() => navigation.replace("DrawerNavigator")}
      />

      <Text
        style={{
          textAlign: "center",
          color: "#FFA500",
          fontSize: 25,
          fontWeight: "bold",
        }}
      >
        ABOUT US
      </Text>
      <View style={{ alignItems: "center" }}>
        <Image source={require("./assets/rotary-club-logo-1.jpeg")} />
      </View>
      <Text
        style={{
          padding: 7,
          margin: 3,
          textAlign: "justify",
          color: "black",
          fontSize: 18,
          lineHeight: 20,
          fontFamily: "custom-font",
        }}
      >
        The Rotary Club of Bombay is one of the pioneers in India of the rotary
        movement, devoted to the ideal of Fellowship through service. It was
        founded on March 19, 1929. The Club meets every Tuesday at 1.15 p.m. at
        the Taj Mahal Hotel, the very place where the founders had their first
        get-together. The first president of the club was Rtn. Charles N.
        Moberley. Sir Phiroze Sethna, one of India’s most illustrious sons, was
        the only Indian among the other European founder members and the first
        Board consisted of only eight members. Most clubs in Dist 3140 can trace
        their roots to the Rotary Club of Bombay.
      </Text>
      <Text
        style={{
          padding: 7,
          margin: 5,
          textAlign: "justify",
          color: "black",
          fontSize: 18,
          lineHeight: 20,
          fontFamily: "custom-font",
        }}
      >
        Reading the list of subsequent presidents is like scanning the ‘Who’s
        who’ of Bombay of the time, bearing names of personalities who even to
        this day have left their mark on the multifaceted life of this great
        Metropolis. Amongst the first few presidents of the Club we have had
        names like Sir Shapoorjee Billimoria, Sir Sultan Chinoy, Sir Jamshedji
        Duggan, Sir Vithal Chandavarkar, Sir Francis Low, Sir Behram Karanjia
        and many others.
      </Text>
      <Text
        style={{
          padding: 7,
          margin: 5,
          textAlign: "justify",
          color: "black",
          fontSize: 18,
          lineHeight: 20,
          fontFamily: "custom-font",
        }}
      >
        The membership of the Club has grown from 38 in 1929 to around 350
        today. The unique single classification concept of Rotary allows the
        Rotary Club of Bombay a membership compromising a high performance
        cross-section of Bombay’s successful business and professional men and
        women, all accomplishers in their own field ranging from doctors to
        architects, legal luminaries to bankers, entrepreneurs to
        educationalists and merchandisers to communicators. The Club offers a
        stimulating fellowship based on a fascinating diversity of interests in
        business, arts, sciences and the professional expertise of its members.
        This Club has inspired the incorporation of 26 Interact clubs, with
        about 750 school children as members, and 6 Rotaract clubs with a
        membership of about 200 college students. There is also a very active
        Inner Wheel Club.
      </Text>
      <Text
        style={{
          padding: 7,
          margin: 5,
          textAlign: "justify",
          color: "black",
          fontSize: 18,
          lineHeight: 20,
          fontFamily: "custom-font",
        }}
      >
        From the very beginning the pulse of Rotary has been and always will be
        Community Service. Today the Rotary Club of Bombay has diversified its
        activities through the work of over fifty committees constituted to look
        after the various avenues of service. Of these, over 20 contribute to
        community service. The Club has been able to attempt a number of service
        programmes only because of generous donations of time and money by the
        members.
      </Text>
      <Text
        style={{
          padding: 7,
          margin: 5,
          textAlign: "justify",
          color: "black",
          fontSize: 18,
          lineHeight: 20,
          fontFamily: "custom-font",
        }}
      >
        “The prayer in silence with faith for love is service in peace.” –
        Mahatma Gandhi
      </Text>
    </ScrollView>
  );
};

export default About;

const styles = StyleSheet.create({});
