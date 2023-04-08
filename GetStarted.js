import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";


const GetstartedPage = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        backgroundColor: "#0782F9",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Image
        style={{ height: 380, width: 350, marginBottom: 10, borderRadius: 15 }}
        source={require("./assets/jouful.png")}
      />
      <Text
        style={{
          marginTop: 10,
          fontWeight: "800",
          fontSize: 22,
          marginBottom: 30,
          color: "white",
        }}
      >
        WELCOME TO BOMBAY ROTARY CLUB
      </Text>

      <TouchableOpacity
        style={{
          backgroundColor: "white",
          width: "80%",
          height: 60,
          padding: 15,
          borderRadius: 40,
          alignItems: "center",
          justifyContent: "center",
          marginTop: 5,
          marginBottom: 20,
          marginLeft: 15,
          borderWidth: 0.5,
          borderColor: "black",
        }}
        onPress={() => navigation.replace("LoginScreen")}
      >
        <Text style={{ fontWeight: "600", fontSize: 18 }}>Sign in</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: "#FFA500",
          width: "80%",
          height: 60,
          padding: 15,
          borderRadius: 40,
          alignItems: "center",
          justifyContent: "center",
          marginTop: 5,
          marginBottom: 20,
          marginLeft: 15,
          borderWidth: 1,
          borderColor: "#FFA500",
        }}
        onPress={() => navigation.replace("Register")}
      >
        <Text style={{ fontWeight: "600", fontSize: 18, color: "white" }}>
          Register
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default GetstartedPage;

const styles = StyleSheet.create({});
