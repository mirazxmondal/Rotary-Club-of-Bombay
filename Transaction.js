import { useNavigation } from "@react-navigation/core";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  KeyboardAvoidingView,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Icon2 from "react-native-vector-icons/AntDesign";
import Icon3 from "react-native-vector-icons/MaterialIcons";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { auth, db } from "./firebase/firebase";

const TransactionHistory = ({ route }) => {
  const navigation = useNavigation();
  const [hamberger, setHamberger] = useState(false);
  const [name, setName] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
  });
  // const { data } = route.params;
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
      console.log(auth.currentUser);
    }
    fetchUserListings();
  }, []);

  const about = () => {
    return (
      <View>
        <Text>Home</Text>
      </View>
    );
  };

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("LoginScreen");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <View style={styles.container}>
      <>

      </>
      {!hamberger && (
        <View style={{ marginTop: 10, marginLeft: 5 }}>
          <Text
            style={{
              fontSize: 25,
              fontWeight: "800",
              marginBottom: 15,
              textAlign: "center",
            }}
          >
            Transaction History
          </Text>
          <View>
            <View
              style={{
                borderBottomColor: "gray",
                borderBottomWidth: 0.5,
                paddingHorizontal: 10,
              }}
            >
              <>
                <Text
                  style={{
                    textAlign: "left",
                    fontWeight: "600",
                    fontSize: 18,
                    paddingBottom: 8,
                  }}
                >
                  {" "}
                  2022
                </Text>
              </>
              <>
              </>
            </View>
            <View
              style={{
                borderBottomColor: "gray",
                borderBottomWidth: 0.5,
                paddingHorizontal: 10,
                justifyContent: "center",
              }}
            >
              <View>
                <Text
                  style={{
                    textAlign: "left",
                    fontSize: 18,
                    fontWeight: "600",
                    color: "green",
                  }}
                >
                  ₨ 600.00
                </Text>
              </View>
              <View>
                <Text style={{ textAlign: "right", fontSize: 15 }}>
                  Mar 10, 2022
                </Text>
              </View>
            </View>
            <View
              style={{
                borderBottomColor: "gray",
                borderBottomWidth: 0.5,
                paddingHorizontal: 10,
                justifyContent: "center",
              }}
            >
              <View>
                <Text
                  style={{
                    textAlign: "left",
                    fontSize: 18,
                    fontWeight: "600",
                    color: "green",
                  }}
                >
                  ₨ 400.00
                </Text>
              </View>
              <View>
                <Text style={{ textAlign: "right", fontSize: 15 }}>
                  Apr 12, 2022
                </Text>
              </View>
            </View>
            <View
              style={{
                borderBottomColor: "gray",
                borderBottomWidth: 0.5,
                paddingHorizontal: 10,
                justifyContent: "center",
              }}
            >
              <View>
                <Text
                  style={{
                    textAlign: "left",
                    fontSize: 18,
                    fontWeight: "600",
                    color: "green",
                  }}
                >
                  ₨ 300.00
                </Text>
              </View>
              <View>
                <Text style={{ textAlign: "right", fontSize: 15 }}>
                  May 03, 2022
                </Text>
              </View>
            </View>
            <View
              style={{
                borderBottomColor: "gray",
                borderBottomWidth: 0.5,
                paddingHorizontal: 10,
                justifyContent: "center",
              }}
            >
              <View>
                <Text
                  style={{
                    textAlign: "left",
                    fontSize: 18,
                    fontWeight: "600",
                    color: "green",
                  }}
                >
                  ₨ 1600.00
                </Text>
              </View>
              <View>
                <Text style={{ textAlign: "right", fontSize: 15 }}>
                  Jun 08 , 2022
                </Text>
              </View>
            </View>
            <View
              style={{
                borderBottomColor: "gray",
                borderBottomWidth: 0.5,
                paddingHorizontal: 10,
                justifyContent: "center",
              }}
            >
              <View>
                <Text
                  style={{
                    textAlign: "left",
                    fontSize: 18,
                    fontWeight: "600",
                    color: "green",
                  }}
                >
                  ₨ 900.00
                </Text>
              </View>
              <View>
                <Text style={{ textAlign: "right", fontSize: 15 }}>
                  Jul 15, 2022
                </Text>
              </View>
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

export default TransactionHistory;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // marginTop: 50,
    marginBottom: 10,
    // alignItems: "center",
    // marginLeft: 10,
    fontFamily: "custom-font",
  },
  button: {
    backgroundColor: "#0782F9",
    width: "60%",
    // height: "100",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    position: "absolute",
    bottom: 5,
    marginTop: 40,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
});
