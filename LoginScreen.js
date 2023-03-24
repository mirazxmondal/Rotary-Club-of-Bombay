import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  View,
} from "react-native";
import Header from "./components/Header";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import { auth } from "./firebase/firebase";
import firebase from "firebase/app";
import "firebase/auth";

const LoginScreen = () => {
  const navigator = useNavigation();
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  // const [username, setUsername] = useState("");

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigator.replace("DrawerNavigator");
      }
    });
  });

  const currentUser = auth.currentUser;

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        alert("Login Successful");
        console.log(userCredential);
        navigator.navigate("DrawerNavigator");
        // ...
        // updateProfile(auth.currentUser, {
        //   displayName: username,
        // });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("Unable to Sign in!");
      });
  };

  return (
    <ScrollView contentContainerStyle={styles.container} behavior="padding">
      <Header />
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
        />
        {/* <TextInput
          placeholder="Username"
          value={username}
          onChangeText={(text) => setUsername(text)}
          style={styles.input}
        /> */}
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={styles.input}
          secureTextEntry
        />
      </View>

      <View style={styles.buttonContainer}>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 20,
          }}
        >
          <TouchableOpacity onPress={handleSignIn} style={styles.button}>
            <Text style={styles.buttonText}>Login as User</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 20,
          }}
        >
          <TouchableOpacity
            onPress={() => navigator.replace("AdminLogin")}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Login As Admin</Text>
          </TouchableOpacity>
        </View>

        {/* <TouchableOpacity
          onPress={() => navigator.replace("AdminLogin")}
          style={[styles.button1, styles.buttonOutline1]}
        >
          <Text style={styles.buttonOutlineText1}>Login As Admin</Text>
        </TouchableOpacity> */}
      </View>
      <Text style={{ color: "white", bottom: 160, position: "absolute" }}>
        Copyright ©Bombay Rotary Club
      </Text>
    </ScrollView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // position: "relative",
    backgroundColor: "#0782F9",
    paddingBottom: 190,
    paddingTop: 40,
  },
  inputContainer: {
    width: "80%",
  },
  input: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 30,
    marginTop: 25,
    borderWidth: 2,
    borderColor: "#FFA500",
  },
  buttonContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 40,
  },
  button: {
    backgroundColor: "#FFA500",
    width: "60%",
    height: 60,
    padding: 15,
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    marginLeft: 15,
  },
  buttonOutline: {
    backgroundColor: "white",
    marginTop: 5,
    borderColor: "#FFA500",
    borderWidth: 2,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  buttonOutlineText: {
    color: "#FFA500",
    fontWeight: "700",
    fontSize: 16,
  },
  button1: {
    backgroundColor: "#0782F9",
    width: "60%",
    height: 60,
    padding: 15,
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginLeft: 15,
  },
  buttonOutline1: {
    backgroundColor: "#F79AC0",
    marginTop: 5,
  },
  buttonOutlineText1: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
});
