import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../Home";
import Events from "../Events";
import Icon from "react-native-vector-icons/FontAwesome";
import PayMembership from "../Payments";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  KeyboardAvoidingView,
} from "react-native";
import Donate from "../Donate";
import HelpDesk from "../HelpDesk";
import About from "../About";
import TransactionHistory from "../Transaction";
// import { NavigationContainer } from "@react-navigation/native";
import Icon3 from "react-native-vector-icons/MaterialIcons";
import { auth } from "../firebase/firebase";
import { useNavigation } from "@react-navigation/native";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  const navigation = useNavigation();

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.navigate("LoginScreen");
      })
      .catch((error) => alert(error.message));
  };

  const CustomHeaderIcon = ({ onPress }) => (
    <View style={{ paddingHorizontal: 10 }}>
      <Icon3 name="logout" size={30} color="white" onPress={handleSignOut} />
    </View>
  );
  return (
    <Drawer.Navigator>
      {/* <Drawer.Screen name="Home" component={Home} /> */}
      {/* <Drawer.Screen
        name={`Home `}
        options={{
          headerStyle: {
            backgroundColor: "#0782F9",
          },
          headerTintColor: "#fff",
          headerTitleAlign: "center",
          //   title: "Rotary Club Bombay",
        }}
        component={Home}
      /> */}
      <Drawer.Screen
        name={`Transaction `}
        options={{
          headerStyle: {
            backgroundColor: "#0782F9",
          },
          headerTintColor: "#fff",
          headerTitleAlign: "center",
          headerRight: ({ onPress }) => (
            <CustomHeaderIcon onPress={handleSignOut} />
          ),
          //   title: "Rotary Club Bombay",
        }}
        component={TransactionHistory}
      />
      <Drawer.Screen
        name={`Pay Membership`}
        options={{
          headerStyle: {
            backgroundColor: "#0782F9",
          },
          headerTintColor: "#fff",
          headerTitleAlign: "center",
          //   title: "Rotary Club Bombay",
        }}
        component={PayMembership}
      />
      <Drawer.Screen
        name={`Donate`}
        options={{
          headerStyle: {
            backgroundColor: "#0782F9",
          },
          headerTintColor: "#fff",
          headerTitleAlign: "center",
          //   title: "Rotary Club Bombay",
        }}
        component={Donate}
      />
      <Drawer.Screen
        name="Events"
        options={{
          headerStyle: {
            backgroundColor: "#0782F9",
          },
          headerTintColor: "#fff",
          headerTitleAlign: "center",
          //   title: "Rotary Club Bombay",
        }}
        component={Events}
      />

      <Drawer.Screen
        name={`Help Desk`}
        options={{
          headerStyle: {
            backgroundColor: "#0782F9",
          },
          headerTintColor: "#fff",
          headerTitleAlign: "center",
          //   title: "Rotary Club Bombay",
        }}
        component={HelpDesk}
      />
      <Drawer.Screen
        name={`About`}
        options={{
          headerStyle: {
            backgroundColor: "#0782F9",
          },
          headerTintColor: "#fff",
          headerTitleAlign: "center",
          //   title: "Rotary Club Bombay",
        }}
        component={About}
      />
    </Drawer.Navigator>
  );
}
