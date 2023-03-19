import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/AntDesign";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useNavigation } from "@react-navigation/native";

const PayMembership = () => {
  const navigation = useNavigation();
  const [amount, setAmount] = useState(null);
  return (
    <KeyboardAwareScrollView
      style={{ backgroundColor: "white", height: "100%" }}
    >
      <Icon
        name="leftcircle"
        size={30}
        color={"#FFA500"}
        style={{ top: 5, left: 10, zIndex: 1, position: "absolute" }}
        onPress={() => navigation.replace("DrawerNavigator")}
      />

      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "white",
          padding: 26,
        }}
      >
        <Text
          style={{
            top: 1,
            position: "absolute",
            fontSize: 32,
            color: "#FFA500",
            fontWeight: "bold",
          }}
        >
          PAY
        </Text>
        <Image
          style={{ height: 300, width: 300, marginTop: 50 }}
          source={require("./assets/qr.png")}
        />
      </View>
      <View style={{ alignItems: "center", marginTop: 20 }}>
        <Text style={{ color: "black" }}>Pay Membership Due</Text>
        <TextInput
          style={{
            borderColor: "#FFA500",
            borderWidth: 3,
            width: "60%",
            padding: 5,
            paddingHorizontal: 20,
            borderRadius: 15,
          }}
          placeholder="Enter Amount"
          // value={}
          onChangeText={(amount) => setAmount(amount)}
          keyboardType="numeric"
        ></TextInput>
      </View>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.replace("ThankYouPage")}
        >
          <Text style={styles.buttonText}>Paid</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default PayMembership;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#FFA500",
    width: "40%",
    // height: "100",
    padding: 15,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    // position: "absolute",
    bottom: 5,
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
    // fontFamily: "Montserrat-Medium",
  },
});
