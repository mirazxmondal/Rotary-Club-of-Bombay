import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
} from "react-native";
import Header2 from "./components/Header2";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/firebase";
import { Icon } from "react-native-vector-icons/Entypo";


const AdminLogin = () => {
  const navigator = useNavigation();
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigator.replace("Admin");
      }
    });
  });

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        alert("Login Successful");
        navigator.replace("Admin");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };

  return (
    <ScrollView contentContainerStyle={styles.container} behavior="padding">
      <Header2 />
      {/* <Icon name={"triangle-left"} size={30} /> */}
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={styles.input}
          secureTextEntry
        />
      </View>

      <View style={styles.buttonContainer}>
        <View>
          <TouchableOpacity
            onPress={handleSignIn}
            style={[styles.button1, styles.buttonOutline1]}
          >
            <Text style={styles.buttonOutlineText1}>Login As Admin</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text style={{ color: "white", bottom: 100, position: "absolute" }}>
        Copyright ©Bombay Rotary Club
      </Text>
    </ScrollView>
  );
};

export default AdminLogin;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    backgroundColor: "#0782F9",
    marginTop: 0,
    paddingBottom: 190,
    paddingTop: 100,
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
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  button: {
    backgroundColor: "#FFEF00",
    width: "50%",
    height: 60,
    padding: 15,
    borderRadius: 40,
    alignItems: "center",
    marginBottom: 20,
    marginLeft: 15,
  },
  buttonOutline: {
    backgroundColor: "white",
    marginTop: 5,
    borderColor: "#FFEF00",
    borderWidth: 2,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  buttonOutlineText: {
    color: "#FFEF00",
    fontWeight: "700",
    fontSize: 16,
  },
  button1: {
    backgroundColor: "#0782F9",
    width: 200,
    height: 60,
    padding: 15,
    borderRadius: 40,
    alignItems: "center",
  },
  buttonOutline1: {
    backgroundColor: "#FFA500",
    marginTop: 5,
    borderColor: "#FFA500",
    borderWidth: 2,
  },
  buttonOutlineText1: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
});
