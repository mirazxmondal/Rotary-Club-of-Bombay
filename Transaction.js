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
// import Cards from "../components/Cards";
// import Header from "../components/Header";
// import About from "./About";
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
// import DonateMoney from "./DonateMoney";

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
      // setListings(listings);
      // setLoading(false);
    }
    fetchUserListings();
  }, []);

  //   const handleSignOut = () => {
  //     auth
  //       .signOut()
  //       .then(() => {
  //         navigation.replace("Login");
  //       })
  //       .catch((error) => alert(error.message));
  //   };
  // let name;

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
      <Text
        style={{
          fontWeight: "bold",
          marginBottom: 5,
          marginTop: 5,
          textAlign: "center",
          fontSize: 20,
          fontFamily: "custom-font",
        }}
      >
        {` Welcome ${auth.currentUser.displayName}`}
      </Text>

      <>
        {/* <Icon3
          name="logout"
          size={30}
          style={{ position: "absolute", top: 2, right: 5, marginRight: 5 }}
          onPress={handleSignOut}
        /> */}
      </>

      {/* {hamberger && (
        <View style={{ position: "relative" }}>
          <Icon2
            style={{
              position: "absolute",
              top: 2,
              right: 110,
              zIndex: 15,
              borderWidth: 0.5,
              borderColor: "black",
            }}
            name="close"
            size={20}
            color="black"
            onPress={() => setHamberger(false)}
          />
        </View>
      )} */}

      {/* <Tab.Navigator>
        <Tab.Screen name="About" component={About} />
        <Tab.Screen name="Donation" component={DonateMoney} />
      </Tab.Navigator> */}
      {/* {hamberger && <Cards />} */}
      {/* <TouchableOpacity onPress={handleSignOut} style={styles.button}>
        <Text style={styles.buttonText}>Sign out</Text>
      </TouchableOpacity> */}
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
            {/* <View
              style={{
                padding: 20,
                width: "80%",
                borderRadius: 25,
                backgroundColor: "#FFA500",
                shadowColor: "#000000",
                shadowOffset: {
                  width: 0,
                  height: 6,
                },
                shadowOpacity: 0.53,
                shadowRadius: 13.97,

                elevation: 21,
              }}
            >
              <Text style={{ color: "white" }}>Date</Text>
              <Text
                style={{ fontSize: 35, color: "white", textAlign: "right" }}
              >
                600
              </Text>
              <Text style={{ fontSize: 20, color: "white" }}>To</Text>
            </View> */}
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
                {/* <Text
                  style={{ textAlign: "right", fontSize: 16, marginRight: 12 }}
                >
                  money
                </Text> */}
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
  // card: {
  //   backgroundColor: "#FFFFFF",
  //   width: "60%",
  //   padding: 25,
  //   borderRadius: 10,
  //   alignItems: "center",
  //   // position: "absolute",
  //   bottom: 5,
  //   marginTop: 40,
  // },
});
