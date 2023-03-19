import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/AntDesign";

const ThankYouPage = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#3ba0fc",
      }}
    >
      {/* <Text style={{ fontSize: 22, fontWeight: "700", marginBottom: 50 }}>
        Thank You for your donation
      </Text> */}

      <Icon
        // color={"#0047AB"}
        color={"#1fd655"}
        size={210}
        name="checkcircle"
        onPress={() => navigation.replace("GetStarted")}
        style={{
          marginBottom: 20,
          backgroundColor: "white",
          borderRadius: 380,
          //   shadowOffset: { width: -2, height: 4 },
          //   shadowColor: "black",
          //   shadowOpacity: 0.2,
          //   shadowRadius: 3,
          borderColor: "#0047AB",
        }}
      />
      <TouchableOpacity
        style={{
          borderWidth: 1,
          borderColor: "#FFA500",
          padding: 10,
          borderRadius: 10,
          backgroundColor: "#FFA500",
          marginTop: 20,
          position: "absolute",
          bottom: 70,
        }}
        onPress={() => navigation.replace("DrawerNavigator")}
      >
        <Text
          style={{
            fontSize: 18,
            fontWeight: "600",
            color: "white",
          }}
        >
          Go to home page
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ThankYouPage;

const styles = StyleSheet.create({});
