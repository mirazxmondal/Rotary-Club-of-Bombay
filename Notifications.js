import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import PushNotification from "./PushNotification";
import MonthlyNotification from "./MonthlyNotification";
import Day1 from "./Notifications/Day1";
import Day2 from "./Notifications/Day2";
import Day3 from "./Notifications/Day3";
import Day4 from "./Notifications/Day4";
import Day5 from "./Notifications/Day5";
import Day6 from "./Notifications/Day6";
import Day7 from "./Notifications/Day7";
import Day8 from "./Notifications/Day8";
import Day9 from "./Notifications/Day9";
import Day10 from "./Notifications/Day10";
import Day11 from "./Notifications/Day11";
import { auth } from "./firebase/firebase";
import { useNavigation } from "@react-navigation/native";

const Notifications = () => {
  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("LoginScreen");
      })
      .catch((error) => alert(error.message));
  };

  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Icon
        name="leftcircle"
        size={30}
        style={{ position: "absolute", top: 45, left: 15, zIndex: 1 }}
        color={"#FFA500"}
        onPress={() => navigation.replace("Admin")}
      />
      <Text
        style={{
          fontSize: 30,
          fontWeight: "800",
          //   position: "absolute",
          marginTop: 40,
          marginBottom: 40,
          fontFamily: "custom-font",
        }}
      >
        Notification Panel
      </Text>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text
          style={{
            marginTop: 25,
            marginBottom: 25,
            fontSize: 22,
            fontFamily: "custom-font",
          }}
        >
          Monthly Notification
        </Text>
        <MonthlyNotification />
      </View>
      <Text
        style={{
          marginTop: 25,
          fontSize: 22,
          fontFamily: "custom-font",
        }}
      >
        Daily Notifications
      </Text>
      <View style={{ flex: 1, flexDirection: "row", marginTop: 60 }}>
        <View>
          <Day1 />
          <Day2 />
          <Day3 />
        </View>
        <View
          style={{
            marginTop: 0,
            marginBottom: 0,
          }}
        >
          <Day4 />
          <Day5 />
          <Day6 />
        </View>
        <View
          style={{
            marginTop: 0,
            marginBottom: 0,
          }}
        >
          <Day7 />
          <Day8 />
          <Day9 />
        </View>
        <View
          style={{
            marginTop: 0,
            marginBottom: 0,
          }}
        >
          <Day10 />
          <Day11 />
          <PushNotification />
        </View>
      </View>

      <View
        style={{
          backgroundColor: "#FFA500",
          padding: 20,
          borderRadius: 50,
          position: "absolute",
          bottom: 50,
          width: 200,
          alignItems: "center",
        }}
      >
        <TouchableOpacity onPress={handleSignOut} style={{ zIndex: 10 }}>
          <Text style={{ fontSize: 18, color: "white" }}>Sign out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Notifications;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#86c5fd",
    alignItems: "center",
    justifyContent: "center",
  },
});
