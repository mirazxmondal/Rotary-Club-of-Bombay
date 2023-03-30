import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useEffect, useState } from "react";
import firebase from "firebase/app";
import "firebase/firestore";
import Icon from "react-native-vector-icons/AntDesign";
import {
  collection,
  doc,
  set,
  arrayUnion,
  FieldValue,
  getDoc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
// import { FieldValue } from "firebase-admin/firestore";

import { auth, db } from "./firebase/firebase";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useNavigation } from "@react-navigation/native";

const PayMembership = () => {
  const navigation = useNavigation();
  const [amount, setAmount] = useState(null);
  const [history, setHistory] = useState({});
  useEffect(() => {
    async function fetchUserListings() {
      const listingRef = collection(db, "users");
      const q = query(
        listingRef,
        where("Rotary_Id", "==", auth.currentUser.uid)
      );
      const quarySnap = await getDocs(q);
      let listings = [];
      quarySnap.forEach((doc) => {
        return listings.push({
          id: doc.id,
          data: doc.data(),
        });
      });
      // console.log(listings);
      const data = listings[0].data;
      setHistory({ ...data.History });
      console.log(history);
      // console.log(auth.currentUser);
    }
    fetchUserListings();
  }, [auth.currentUser.uid]);

  const handlePayment = async () => {
    const listingRef = collection(db, "users");
    const q = query(listingRef, where("Rotary_Id", "==", auth.currentUser.uid));
    const querySnap = await getDocs(q);
    const docRef = querySnap.docs[0].ref;
    // setNewHistory({ ...history, [new Date().getTime()]: amount });
    // console.log(newHistory);

    try {
      await updateDoc(docRef, {
        History: {
          ...history,
          [new Date().getTime()]: {
            amount: amount,
            date: new Date().getTime(),
          },
        },
      });
      console.log("Payment successful.");
    } catch (error) {
      console.log(error.message);
      if (error.code === "not-found") {
        console.error("User document not found.");
      }
    }

    if (amount != null) {
      setTimeout(() => {
        navigation.replace("ThankYouPage");
      }, 2000);
    } else {
      alert("enter a valid amount");
    }
  };
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
          value={amount}
          onChangeText={(amount) => setAmount(amount)}
          keyboardType="numeric"
        ></TextInput>
      </View>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <TouchableOpacity style={styles.button} onPress={handlePayment}>
          <Text style={styles.buttonText}>Pay</Text>
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
    padding: 15,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    bottom: 5,
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
});
