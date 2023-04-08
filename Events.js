import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";


const Events = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={{ paddingTop: 10, fontFamily: "custom-font" }}>
      <Icon
        name="leftcircle"
        size={30}
        style={{ position: "absolute", top: 5, left: 10, zIndex: 1 }}
        color={"#FFA500"}
        onPress={() => navigation.replace("DrawerNavigator")}
      />

      <Text
        style={{
          marginBottom: 15,
          fontSize: 25,
          textAlign: "center",
          fontWeight: "bold",
          color: "#FFA500",
        }}
      >
        EVENTS
      </Text>
      <View style={{ alignItems: "center", fontFamily: "custom-font" }}>
        <View
          style={{
            alignItems: "center",
          }}
        >
          <Image
            style={{ height: 250, width: 390 }}
            source={require("./assets/events1.jpeg")}
          />
        </View>
        <View
          style={{
            height: 320,
            width: 390,
            backgroundColor: "#ffffff",
            borderWidth: 0.5,
            borderColor: "#d3d3d3",
            marginBottom: 30,
            paddingHorizontal: 15,
            paddingTop: 10,
            fontFamily: "custom-font",
          }}
        >
          <Text
            style={{
              textAlign: "left",
              fontSize: 19,
              fontWeight: "800",
              color: "#02529c",
              marginBottom: 5,
              fontFamily: "custom-font",
            }}
          >
            ROTARIANS LEAD BY EXAMPLE
          </Text>
          <Text
            style={{
              textAlign: "left",
              fontSize: 19,
              fontWeight: "bold",
              marginBottom: 8,
              fontFamily: "custom-font",
            }}
          >
            May 10, 2022
          </Text>
          <Text
            style={{
              textAlign: "justify",

              fontSize: 17,
              fontWeight: "600",
              color: "gray",
              fontFamily: "custom-font",
            }}
          >
            Our Dear Rotarian Rusi Taraporevala willed amunificent donation of
            Rs 5.5 crores to set up a corpus at RCB for scholarships to
            deserving students for foreign studies. The MOU for this was
            signedby the gracious Mrs Jeroo Lam and her daughter Niloufer Lam.
            It all started with a call from Jeroo and Rtn. Nelum Gidwani to PP
            Ashish Vaid, and the MOU was drawn up, after many discussions over
            ‘sev puris’ at Willingdon. A big thank you to our Late Rotarian
            Rusi, Jeroo and Niloufer.
          </Text>
        </View>
      </View>
      <View style={{ alignItems: "center" }}>
        <View style={{ alignItems: "center" }}>
          <Image
            style={{ height: 250, width: 390 }}
            source={require("./assets/events2.jpeg")}
          />
        </View>
        <View
          style={{
            height: 320,
            width: 390,
            backgroundColor: "#ffffff",
            borderWidth: 0.5,
            borderColor: "#d3d3d3",
            marginBottom: 30,
            paddingHorizontal: 15,
            paddingTop: 10,
          }}
        >
          <Text
            style={{
              textAlign: "left",
              fontSize: 19,
              fontWeight: "800",
              color: "#02529c",
              marginBottom: 5,
            }}
          >
            PAEDIATRIC HEART SURGERIES – COMMITTEE REPORT
          </Text>
          <Text
            style={{
              textAlign: "left",
              fontSize: 19,
              fontWeight: "bold",
              marginBottom: 8,
            }}
          >
            March 1, 2022
          </Text>
          <Text
            style={{
              textAlign: "justify",
              fontSize: 17,
              fontWeight: "600",
              color: "gray",
              fontFamily: "custom-font",
            }}
          >
            Under our Global Grant No 2099621, we had a total of $5,09,653 (INR
            3,78,26,877/-) approved funds available to us to support surgeries
            of needy and deserving children suffering from congenital heart
            disease. As on February 21st, 2022, out of the abovementioned funds
            we have utilised INR 2,55,26,163/- and committed a further INR
            675000.15/- (patients are yet to be discharged).
          </Text>
        </View>
      </View>
      <View style={{ alignItems: "center" }}>
        <View style={{ alignItems: "center" }}>
          <Image
            style={{ height: 250, width: 390 }}
            source={require("./assets/catal.jpg")}
          />
        </View>
        <View
          style={{
            height: 320,
            width: 390,
            backgroundColor: "#ffffff",
            borderWidth: 0.5,
            borderColor: "#d3d3d3",
            marginBottom: 30,
            paddingHorizontal: 15,
            paddingTop: 10,
          }}
        >
          <Text
            style={{
              textAlign: "left",
              fontSize: 19,
              fontWeight: "800",
              color: "#02529c",
            }}
          >
            BEING A CATALYST FOR CHANGE
          </Text>
          <Text
            style={{
              textAlign: "left",
              fontSize: 19,
              fontWeight: "bold",
              marginBottom: 5,
            }}
          >
            July 28, 2020
          </Text>
          <Text
            style={{
              textAlign: "justify",
              fontSize: 17,
              fontWeight: "600",
              color: "gray",
              marginBottom: 8,
              fontFamily: "custom-font",
            }}
          >
            The total amount raised by Aryaman’s school, The Cathedral & John
            Connon School in Mumbai, was Rs 32.26 lakh of which Aryaman raised
            more than 25 per cent and also the single highest individual amount
            raised for the campaign. When the pandemic first hit, Aryaman, who
            is in the 12th standard and am doing the International Baccalaureate
            Diploma Program, felt there was no way for him to contribute.
          </Text>
        </View>
      </View>
      <View style={{ alignItems: "center" }}>
        <View style={{ alignItems: "center" }}>
          <Image
            style={{ height: 250, width: 390 }}
            source={require("./assets/events3.jpeg")}
          />
        </View>
        <View
          style={{
            height: 320,
            width: 390,
            backgroundColor: "#ffffff",
            borderWidth: 0.5,
            borderColor: "#d3d3d3",
            marginBottom: 30,
            paddingHorizontal: 15,
            paddingTop: 10,
          }}
        >
          <Text
            style={{
              textAlign: "left",
              fontSize: 19,
              fontWeight: "800",
              color: "#02529c",
            }}
          >
            COMMITTEE REPORTS: FUND-RAISING COMMITTEE 2019-2020
          </Text>
          <Text
            style={{
              textAlign: "left",
              fontSize: 19,
              fontWeight: "bold",
              marginBottom: 5,
            }}
          >
            June 30, 2020
          </Text>
          <Text
            style={{
              textAlign: "justify",
              fontSize: 17,
              fontWeight: "600",
              color: "gray",
              marginBottom: 8,
              fontFamily: "custom-font",
            }}
          >
            Singer Sonu Nigam put his vocal chords to good use with his stellar
            performance at the Rotary Club of Bombay’s headlining fund-raiser
            “Sonu Nigam- Live in Concert”, held on August 27th, 2019, at NCPA.
            The event was a great success, thanks to the efforts of hard-working
            Rotarians, Rotarian Partners and Retractors. This was Sonu Nigam’s
            first show in India since 2008.
          </Text>
        </View>
      </View>
      <View style={{ alignItems: "center" }}>
        <View style={{ alignItems: "center" }}>
          <Image
            style={{ height: 250, width: 390 }}
            source={require("./assets/salan.jpg")}
          />
        </View>
        <View
          style={{
            height: 320,
            width: 390,
            backgroundColor: "#ffffff",
            borderWidth: 0.5,
            borderColor: "#d3d3d3",
            marginBottom: 30,
            paddingHorizontal: 15,
            paddingTop: 10,
          }}
        >
          <Text
            style={{
              textAlign: "left",
              fontSize: 19,
              fontWeight: "800",
              color: "#02529c",
            }}
          >
            CHHOTI SI ASHA, BADA SA DIL
          </Text>
          <Text
            style={{
              textAlign: "left",
              fontSize: 19,
              fontWeight: "bold",
              marginBottom: 5,
            }}
          >
            June 30, 2020
          </Text>
          <Text
            style={{
              textAlign: "justify",
              fontSize: 17,
              fontWeight: "600",
              color: "gray",
              marginBottom: 8,
              fontFamily: "custom-font",
            }}
          >
            The initiative, jointly created by Rotary India, Rotary Club of
            Bombay and Wizcraft International Entertainment and supported by
            Being Human.- The Salman Khan Foundation and partnered by Ask
            Nestle.in and Finolex Pipes, was a globally televised fundraiser
            held on Colours TV on Sunday 28, June, 2020. Chhoti Si Asha was our
            initiative to especially focus on the holistic development.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Events;
