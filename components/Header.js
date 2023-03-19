import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";

const Header = () => {
  const navigation = useNavigation();
  return (
    <View style={{ marginTop: 35 }}>
      <Icon
        color={"#FFA500"}
        size={30}
        name="leftcircle"
        onPress={() => navigation.replace("getStarted")}
        style={{ zIndex: 10 }}
      />
      <Text style={styles.header}>LOGIN</Text>
      <Image
        style={{ height: 220, width: 300, borderRadius: 25 }}
        source={require("../assets/Loginlogo.jpg")}
      />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    textAlign: "center",
    bottom: 40,
    // left: -80,
    // marginBottom: 40,
    marginTop: 0,
    // position: "absolute",
    fontWeight: "bold",
    fontSize: 30,
    color: "#FFA500",
  },
});
