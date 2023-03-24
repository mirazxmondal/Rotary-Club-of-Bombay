import {
  TextView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from "react-native";
import { useNavigation } from "@react-navigation/core";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { auth } from "../../firebase/firebase";

const Cards = ({ value }) => {
  const names = [
    {
      index: "3",
      name: "HOME",
      listner: " ",
      iconName: "home",
    },
    {
      index: "1",
      name: "PAY",
      listner: " ",
      iconName: "money",
    },
    {
      index: "2",
      name: "DONATE",
      listner: " ",
      iconName: "gratipay",
    },
    {
      index: "7",
      name: "EVENTS",
      listner: " ",
      iconName: "calendar",
    },

    {
      index: "4",
      name: "HELPDESK",
      listner: " ",
      iconName: "question-circle",
    },
    {
      index: "5",
      name: "ABOUT",
      listner: " ",
      iconName: "info-circle",
    },

  ];

  const navigation = useNavigation();

  // const handleSignOut = () => {
  //   auth
  //     .signOut()
  //     .then(() => {
  //       navigation.replace("Login");
  //     })
  //     .catch((error) => alert(error.message));
  // };

  const onPress = (index) => {
    if (index == 1) {
      navigation.replace("Payment");
    }
    if (index == 2) {
      navigation.replace("Donate");
    }
    if (index == 3) {
      navigation.replace("Transaction");
    }
    if (index == 4) {
      navigation.replace("Helpdesk");
    }
    if (index == 5) {
      navigation.replace("About");
    }
    if (index == 7) {
      navigation.replace("Events");
    }
    console.log(index);
  };

  return (
    // <View style={styles.shadowProp}>
    //   <TouchableOpacity
    //     // onPress={handleSignOut}
    //     style={styles.card}
    //   >
    //     <Text style={styles.cardText}>{value}</Text>
    //   </TouchableOpacity>
    // </View>

    <FlatList
      //   contentContainerStyle={{ alignItems: "center", justifyContent: "center" }}
      keyExtractor={(key) => {
        return key.index;
      }}
      showsVerticalScrollIndicator={false}
      data={names}
      style={{
        width: 300,
        backgroundColor: "#91A3B0",
        borderRadius: 5,
        zIndex: 5,
      }}
      renderItem={({ item }) => {
        return (
          <TouchableOpacity
            onPress={() => onPress(item.index)}
            style={[styles.card, styles.shadowProp]}
          >
            <Icon name={item.iconName} size={30} />
            <Text style={styles.cardText}>{item.name}</Text>
          </TouchableOpacity>
        );
      }}
    />
  );
};

export default Cards;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    width: "95%",
    height: 80,
    paddingLeft: 25,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "flex-start",
    marginLeft: 5,
    borderColor: "gray",
    border: 1,
    bottom: 0,
  },
  cardText: {
    fontWeight: "500",
    fontSize: 26,
    color: "black",
    textAlign: "left",
    marginLeft: 10,
  },
  shadowProp: {
    marginTop: 20,
    shadowColor: "black",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
});
