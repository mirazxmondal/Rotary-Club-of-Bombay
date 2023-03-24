import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/AntDesign";
import { useNavigation } from "@react-navigation/native";

const Header2 = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Icon
        name="leftcircle"
        style={{
          color: "#FFA500",
          zIndex: 10,
        }}
        onPress={() => navigation.replace("LoginScreen")}
        size={30}
      />
      <Text style={styles.header}> ADMIN LOGIN</Text>
      <Image
        style={{ height: 280, width: 340, borderRadius: 25, marginTop: 40 }}
        source={require("../assets/Loginlogo.jpg")}
      />
    </View>
  );
};

export default Header2;

const styles = StyleSheet.create({
  header: {
    textAlign: "center",
    bottom: 40,
    marginTop: 0,
    fontWeight: "bold",
    fontSize: 30,
    color: "#FFA500",
  },
});
