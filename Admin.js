import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Button,
  View,
  Text,
  TouchableOpacity,
  Linking,
} from "react-native";

import * as XLSX from "xlsx";
import * as FileSystem from "expo-file-system";
import * as Sharing from "expo-sharing";
import { useNavigation } from "@react-navigation/native";
import { auth, db } from "./firebase/firebase";
import { collection, doc, getDoc, getDocs, query } from "firebase/firestore";
import firestore from "@react-native-firebase/firestore";
import { useEffect, useState } from "react";
import PushNotification from "./PushNotification";

export default function AdminGenerate() {
  const navigation = useNavigation();
  const [formData, setFormData] = useState({});

  // useEffect(() => {
  //   const getData = async () => {
  //    const docRef = collection(db, 'users');
  //    const q = query(docRef, where("Name", "!=", null));
  //    const querySnap = await getDocs(q);
  //    let data = [];
  //    querySnap.forEach((doc) => {
  //     data.push({
  //       id:doc.id,
  //       data:doc.data()
  //     });
  //     setFormData(data);
  //     console.log(formData);
  //    })
  //   getData();
  // },[formData]);

  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        navigation.replace("LoginScreen");
      })
      .catch((error) => alert(error.message));
  };

  const generateExcel = () => {
    let wb = XLSX.utils.book_new();
    let ws = XLSX.utils.aoa_to_sheet([
      ["Email", "Password", "History"],
      ["test1@gmail.com", "213456"],
      ["test2@gmail.com", "231456"],
    ]);

    XLSX.utils.book_append_sheet(wb, ws, "MyFirstSheet", true);

    const base64 = XLSX.write(wb, { type: "base64" });
    const filename = FileSystem.documentDirectory + "MyExcel.xlsx";
    FileSystem.writeAsStringAsync(filename, base64, {
      encoding: FileSystem.EncodingType.Base64,
    }).then(() => {
      Sharing.shareAsync(filename);
    });
  };

  return (
    <View style={styles.container}>
      {/* <PushNotification /> */}
      <Text
        style={{
          fontSize: 30,
          fontWeight: "800",
          position: "absolute",
          top: 90,
        }}
      >
        WELCOME ADMIN
      </Text>
      <Text style={{ position: "relative", fontSize: 22, margin: 30 }}>
        Click here to generate Excel
      </Text>
      <TouchableOpacity
        style={{ backgroundColor: "#3ba0fc", padding: 15, borderRadius: 12 }}
        onPress={() =>
          Linking.openURL("https://rotary-clubof-bombay-admin.vercel.app/")
        }
      >
        <Text style={{ color: "white" }}>Generate Excel</Text>
      </TouchableOpacity>
      <Text style={{ position: "relative", fontSize: 22, margin: 30 }}>
        Click here to push notification
      </Text>
      <TouchableOpacity
        style={{
          backgroundColor: "#3ba0fc",
          padding: 15,
          borderRadius: 12,
          marginTop: 10,
        }}
        onPress={() => navigation.replace("Notifications")}
      >
        <Text style={{ color: "white" }}>Push Notifications</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
      <View
        style={{
          backgroundColor: "#FFA500",
          padding: 20,
          borderRadius: 50,
          // marginTop: 80,
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#86c5fd",
    alignItems: "center",
    justifyContent: "center",
  },
});
