import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import Icon from "react-native-vector-icons/AntDesign";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
import { auth, db } from "./firebase/firebase";
import { addDoc, collection } from "firebase/firestore";


const Register = () => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [phone, setPhone] = useState(null);
  const [password, setPassword] = useState(null);
  const [history, setHistory] = useState({});

  const saveData = async () => {
    // Add a new document with a generated id.
    const docRef = await addDoc(collection(db, "users"), {
      Rotary_Id: auth.currentUser.uid,
      Name: name,
      Email: email,
      Phone: phone,
      Password: password,
      History: history,
    });
    console.log("Document written with ID: ", docRef.id);
  };

  const signOut = () => {
    auth
      .signOut()
      .then(() => {
        navigator.replace("LoginScreen");
      })
      .catch((error) => alert(error.message));
  };

  const navigator = useNavigation();

  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        alert("Registered Successfully");
        saveData();
        updateProfile(auth.currentUser, {
          displayName: name,
        });
        signOut();
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("Unable to Sign up! Please try again");
        // ..
      });
    updateProfile(auth.currentUser, {
      displayName: name,
    });
  };
  const currentUser = auth.currentUser;
  useEffect(() => {
    if (currentUser) {
      updateProfile(auth.currentUser, {
        displayName: name,
      });
    }
  }, [currentUser]);

  return (
    <ScrollView
      contentContainerStyle={{
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#0782F9",
        paddingTop: 50,
        paddingBottom: 190,
      }}
    >
      <View>
        <View style={{ position: "absolute", top: 5, right: 200 }}>
          <Icon
            color={"#FFA500"}
            size={30}
            name="leftcircle"
            onPress={() => navigator.replace("getStarted")}
          />
        </View>
        <Text
          style={{
            fontSize: 30,
            fontWeight: "800",
            color: "#FFA500",
            paddingBottom: 40,
          }}
        >
          Sign up
        </Text>
      </View>
      <Image
        style={{ height: 220, width: 300, borderRadius: 25 }}
        source={require("./assets/SignUp.jpg")}
      />
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Name"
          value={name}
          onChangeText={(text) => setName(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Phone"
          value={phone}
          onChangeText={(text) => setPhone(text)}
          keyboardType="numeric"
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
      <View style={{ paddingTop: 50, paddingBottom: 30 }}>
        <TouchableOpacity
          onPress={handleSignUp}
          style={[styles.button1, styles.buttonOutline1]}
        >
          <Text style={styles.buttonOutlineText1}>Register</Text>
        </TouchableOpacity>
      </View>
      <Text style={{ color: "white", bottom: 130, position: "absolute" }}>
        Copyright ©Bombay Rotary Club
      </Text>
    </ScrollView>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    backgroundColor: "#0782F9",
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
