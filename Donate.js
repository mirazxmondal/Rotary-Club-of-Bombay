import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import Icon from "react-native-vector-icons/AntDesign";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useNavigation } from "@react-navigation/native";
// import { SelectList } from "react-native-dropdown-select-list";

const Donate = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState("");
  const [showPayment, setShowPayment] = useState(false);
  const [amount, setAmount] = useState(null);
  const [state, setState] = useState("cards");
  const [state1, setState1] = useState("cards");
  const [state2, setState2] = useState("cards");
  const [state3, setState3] = useState("cards");
  const [state4, setState4] = useState("cards");
  const [state5, setState5] = useState("cards");
  const [state6, setState6] = useState("cards");
  const [state7, setState7] = useState("cards");
  const [state8, setState8] = useState("cards");
  const [state9, setState9] = useState("cards");
  const [state10, setState10] = useState("cards");
  const [state11, setState11] = useState("cards");
  const [state12, setState12] = useState("cards");
  const [state13, setState13] = useState("cards");
  const [state14, setState14] = useState("cards");

  const handlePayment = () => {
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
        style={{ top: 5, left: 10, zIndex: 1, position: "absolute" }}
        color={"#FFA500"}
        onPress={() => navigation.replace("DrawerNavigator")}
      />

      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "white",
          padding: 30,
        }}
      >
        <Text
          style={{
            top: 1,
            position: "absolute",
            fontSize: 28,
            fontWeight: "bold",
            color: "#FFA500",
          }}
        >
          DONATE
        </Text>
        <Image
          style={{ height: 300, width: 300, marginTop: 30 }}
          source={require("./assets/qr.png")}
        />
      </View>
      <View style={{ alignItems: "center", marginTop: 20 }}>
        {/* <Text style={{ color: "black" }}>Donation Catagories 👇</Text>
          <SelectList
            data={data}
            setSelected={(val) => setSelected(val)}
            boxStyles={{
              borderColor: "#ffdf00",
              borderWidth: 2,
              width: "40%",
              padding: 5,
              borderRadius: 15,
            }}
            placeholder={"Select Scheme"}
            save="value"
            onSelect={() => console.log(selected)}
          /> */}
        {/* {selected && <Text>Pay As You Wish! 👇</Text>} */}
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            marginVertical: 5,
          }}
        >
          <View style={styles[state]}>
            <ImageBackground
              source={require("./assets/card-img/education.jpg")}
              style={{
                width: "100%",
                height: "100%",
                borderRadius: 20,

                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  marginBottom: 30,
                  color: "white",
                  fontSize: 16,
                  marginTop: 25,
                  fontWeight: "700",
                }}
              >
                {" "}
                EDUCATION
              </Text>
              <TouchableOpacity
                style={{
                  paddingHorizontal: 14,
                  paddingVertical: 4,
                  backgroundColor: "#FFA500",
                  borderRadius: 8,
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onPress={() => setState("cardsActive")}
              >
                <Text style={{ fontWeight: "600", color: "white" }}>
                  Select
                </Text>
              </TouchableOpacity>
            </ImageBackground>
          </View>
          <View style={styles[state1]}>
            <ImageBackground
              source={require("./assets/card-img/book.jpg")}
              style={{
                width: "100%",
                height: "100%",
                borderRadius: 20,

                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  marginBottom: 30,
                  fontSize: 16,
                  marginTop: 25,
                  color: "white",
                  fontWeight: "700",
                }}
              >
                {" "}
                Bhavishya
              </Text>
              <TouchableOpacity
                style={{
                  paddingHorizontal: 14,
                  paddingVertical: 4,
                  backgroundColor: "#FFA500",
                  borderRadius: 8,
                }}
                onPress={() => setState1("cardsActive")}
              >
                <Text style={{ fontWeight: "600", color: "white" }}>
                  Select
                </Text>
              </TouchableOpacity>
            </ImageBackground>
          </View>
          <View style={styles[state2]}>
            <ImageBackground
              source={require("./assets/card-img/lighthouse.jpg")}
              style={{
                width: "100%",
                height: "100%",
                borderRadius: 20,

                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  marginBottom: 30,
                  fontSize: 16,
                  marginTop: 25,
                  color: "white",
                  fontWeight: "700",
                }}
              >
                {" "}
                Lighthouse
              </Text>
              <TouchableOpacity
                style={{
                  paddingHorizontal: 14,
                  paddingVertical: 4,
                  backgroundColor: "#FFA500",
                  borderRadius: 8,
                }}
                onPress={() => setState2("cardsActive")}
              >
                <Text style={{ fontWeight: "600", color: "white" }}>
                  Select
                </Text>
              </TouchableOpacity>
            </ImageBackground>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            marginVertical: 5,
          }}
        >
          <View style={styles[state3]}>
            <ImageBackground
              source={require("./assets/card-img/scholarship.jpg")}
              style={{
                width: "100%",
                height: "100%",
                borderRadius: 20,

                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  marginBottom: 30,
                  fontSize: 13,
                  color: "white",
                  marginTop: 25,
                  fontWeight: "800",
                }}
              >
                {" "}
                Scholarships
              </Text>
              <TouchableOpacity
                style={{
                  paddingHorizontal: 14,
                  paddingVertical: 4,
                  backgroundColor: "#FFA500",
                  borderRadius: 8,
                }}
                onPress={() => setState3("cardsActive")}
              >
                <Text style={{ fontWeight: "600", color: "white" }}>
                  Select
                </Text>
              </TouchableOpacity>
            </ImageBackground>
          </View>
          <View style={styles[state4]}>
            <ImageBackground
              source={require("./assets/card-img/training.jpg")}
              style={{
                width: "100%",
                height: "100%",
                borderRadius: 20,

                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  marginBottom: 30,
                  fontSize: 16,
                  color: "white",
                  marginTop: 25,
                  fontWeight: "700",
                }}
              >
                {" "}
                Training
              </Text>
              <TouchableOpacity
                style={{
                  paddingHorizontal: 14,
                  paddingVertical: 4,
                  backgroundColor: "#FFA500",
                  borderRadius: 8,
                }}
                onPress={() => setState4("cardsActive")}
              >
                <Text style={{ fontWeight: "600", color: "white" }}>
                  Select
                </Text>
              </TouchableOpacity>
            </ImageBackground>
          </View>
          <View style={styles[state5]}>
            <ImageBackground
              source={require("./assets/card-img/welfare.png")}
              style={{
                width: "100%",
                height: "100%",
                borderRadius: 20,

                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  marginBottom: 30,
                  fontSize: 16,
                  color: "white",
                  marginTop: 25,
                  fontWeight: "700",
                }}
              >
                {" "}
                Welfare
              </Text>
              <TouchableOpacity
                style={{
                  paddingHorizontal: 14,
                  paddingVertical: 4,
                  backgroundColor: "#FFA500",
                  borderRadius: 8,
                }}
                onPress={() => setState5("cardsActive")}
              >
                <Text style={{ fontWeight: "600", color: "white" }}>
                  Select
                </Text>
              </TouchableOpacity>
            </ImageBackground>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            marginVertical: 5,
          }}
        >
          <View style={styles[state6]}>
            <ImageBackground
              source={require("./assets/card-img/covid.jpg")}
              style={{
                width: "100%",
                height: "100%",
                borderRadius: 20,

                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  marginBottom: 30,
                  fontSize: 16,
                  color: "white",
                  marginTop: 25,
                  fontWeight: "700",
                }}
              >
                {" "}
                Covid 19
              </Text>
              <TouchableOpacity
                style={{
                  paddingHorizontal: 14,
                  paddingVertical: 4,
                  backgroundColor: "#FFA500",
                  borderRadius: 8,
                }}
                onPress={() => setState6("cardsActive")}
              >
                <Text style={{ fontWeight: "600", color: "white" }}>
                  Select
                </Text>
              </TouchableOpacity>
            </ImageBackground>
          </View>
          <View style={styles[state7]}>
            <ImageBackground
              source={require("./assets/card-img/yoga.jpeg")}
              style={{
                width: "100%",
                height: "100%",
                borderRadius: 20,

                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  marginBottom: 30,
                  fontSize: 16,
                  color: "white",
                  marginTop: 25,
                  fontWeight: "700",
                }}
              >
                {" "}
                Yoga
              </Text>
              <TouchableOpacity
                style={{
                  paddingHorizontal: 14,
                  paddingVertical: 4,
                  backgroundColor: "#FFA500",
                  borderRadius: 8,
                }}
                onPress={() => setState7("cardsActive")}
              >
                <Text style={{ fontWeight: "600", color: "white" }}>
                  Select
                </Text>
              </TouchableOpacity>
            </ImageBackground>
          </View>
          <View style={styles[state8]}>
            <ImageBackground
              source={require("./assets/card-img/cancer.png")}
              style={{
                width: "100%",
                height: "100%",
                borderRadius: 20,

                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  marginBottom: 30,
                  color: "white",
                  fontSize: 16,
                  marginTop: 25,
                  fontWeight: "700",
                }}
              >
                {" "}
                Cancer
              </Text>
              <TouchableOpacity
                style={{
                  paddingHorizontal: 14,
                  paddingVertical: 4,
                  backgroundColor: "#FFA500",
                  borderRadius: 8,
                }}
                onPress={() => setState8("cardsActive")}
              >
                <Text style={{ fontWeight: "600", color: "white" }}>
                  Select
                </Text>
              </TouchableOpacity>
            </ImageBackground>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            marginVertical: 5,
          }}
        >
          <View style={styles[state9]}>
            <ImageBackground
              source={require("./assets/card-img/clinic.jpg")}
              style={{
                width: "100%",
                height: "100%",
                borderRadius: 20,

                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  marginBottom: 30,
                  color: "white",
                  fontSize: 16,
                  marginTop: 25,
                  fontWeight: "700",
                }}
              >
                {" "}
                RCB Clinic
              </Text>
              <TouchableOpacity
                style={{
                  paddingHorizontal: 14,
                  paddingVertical: 4,
                  backgroundColor: "#FFA500",
                  borderRadius: 8,
                }}
                onPress={() => setState9("cardsActive")}
              >
                <Text style={{ fontWeight: "600", color: "white" }}>
                  Select
                </Text>
              </TouchableOpacity>
            </ImageBackground>
          </View>
          <View style={styles[state10]}>
            <ImageBackground
              source={require("./assets/card-img/nature.jpg")}
              style={{
                width: "100%",
                height: "100%",
                borderRadius: 20,

                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  marginBottom: 30,
                  color: "white",
                  fontSize: 16,
                  marginTop: 25,
                  fontWeight: "700",
                }}
              >
                {" "}
                Nature
              </Text>
              <TouchableOpacity
                style={{
                  paddingHorizontal: 14,
                  paddingVertical: 4,
                  backgroundColor: "#FFA500",
                  borderRadius: 8,
                }}
                onPress={() => setState10("cardsActive")}
              >
                <Text style={{ fontWeight: "600", color: "white" }}>
                  Select
                </Text>
              </TouchableOpacity>
            </ImageBackground>
          </View>
          <View style={styles[state11]}>
            <ImageBackground
              source={require("./assets/card-img/legal.jpg")}
              style={{
                width: "100%",
                height: "100%",
                borderRadius: 20,

                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  marginBottom: 30,
                  color: "white",
                  fontSize: 16,
                  marginTop: 25,
                  fontWeight: "700",
                }}
              >
                {" "}
                Legal Aid
              </Text>
              <TouchableOpacity
                style={{
                  paddingHorizontal: 14,
                  paddingVertical: 4,
                  backgroundColor: "#FFA500",
                  borderRadius: 8,
                }}
                onPress={() => setState11("cardsActive")}
              >
                <Text style={{ fontWeight: "600", color: "white" }}>
                  Select
                </Text>
              </TouchableOpacity>
            </ImageBackground>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            marginVertical: 5,
          }}
        >
          <View style={styles[state12]}>
            <ImageBackground
              source={require("./assets/card-img/tiger.jpg")}
              style={{
                width: "100%",
                height: "100%",
                borderRadius: 20,

                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  marginBottom: 30,
                  color: "white",
                  fontSize: 16,
                  marginTop: 25,
                  fontWeight: "700",
                }}
              >
                {" "}
                Animal
              </Text>
              <TouchableOpacity
                style={{
                  paddingHorizontal: 14,
                  paddingVertical: 4,
                  backgroundColor: "#FFA500",
                  borderRadius: 8,
                }}
                onPress={() => setState12("cardsActive")}
              >
                <Text style={{ fontWeight: "600", color: "white" }}>
                  Select
                </Text>
              </TouchableOpacity>
            </ImageBackground>
          </View>
          <View style={styles[state13]}>
            <ImageBackground
              source={require("./assets/card-img/nutri.jpg")}
              style={{
                width: "100%",
                height: "100%",
                borderRadius: 20,

                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  marginBottom: 30,
                  color: "white",
                  fontSize: 16,
                  marginTop: 25,
                  fontWeight: "700",
                }}
              >
                {" "}
                Nutrition
              </Text>
              <TouchableOpacity
                style={{
                  paddingHorizontal: 14,
                  paddingVertical: 4,
                  backgroundColor: "#FFA500",
                  borderRadius: 8,
                }}
                onPress={() => setState13("cardsActive")}
              >
                <Text style={{ fontWeight: "600", color: "white" }}>
                  Select
                </Text>
              </TouchableOpacity>
            </ImageBackground>
          </View>
          <View style={styles[state14]}>
            <ImageBackground
              source={require("./assets/card-img/yep1.png")}
              style={{
                width: "100%",
                height: "100%",
                borderRadius: 20,

                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  marginBottom: 30,
                  color: "white",
                  fontSize: 16,
                  marginTop: 25,
                  fontWeight: "700",
                }}
              >
                {" "}
                YEP
              </Text>
              <TouchableOpacity
                style={{
                  paddingHorizontal: 14,
                  paddingVertical: 4,
                  backgroundColor: "#FFA500",
                  borderRadius: 8,
                }}
                onPress={() => setState14("cardsActive")}
              >
                <Text style={{ fontWeight: "600", color: "white" }}>
                  Select
                </Text>
              </TouchableOpacity>
            </ImageBackground>
          </View>
        </View>

        <TextInput
          style={{
            borderColor: "#FFA500",
            borderWidth: 3,
            width: "53%",
            padding: 8,
            paddingHorizontal: 20,
            borderRadius: 15,
          }}
          keyboardType="numeric"
          onChangeText={(amount) => setAmount(amount)}
          placeholder="Enter a Amount"
        ></TextInput>
      </View>
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <TouchableOpacity style={styles.button} onPress={handlePayment}>
          <Text style={styles.buttonText}>Paid</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default Donate;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#FFA500",
    width: "40%",
    // height: "100",
    padding: 15,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    // position: "absolute",
    bottom: 5,
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
    // fontFamily: "Montserrat-Medium",
  },
  cards: {
    borderColor: "black",
    borderWidth: 1,
    marginBottom: 25,
    // padding: 20,
    width: "30%",
    borderRadius: 10,
    alignItems: "center",
    marginRight: 2,
  },
  cardsActive: {
    borderColor: "blue",
    borderWidth: 2,
    marginBottom: 25,
    // padding: 20,
    width: "30%",
    borderRadius: 10,
    alignItems: "center",
    marginRight: 2,
  },
});
