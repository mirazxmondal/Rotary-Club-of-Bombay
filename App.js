import { createStackNavigator } from "@react-navigation/stack";
import Home from "./Home";
import Profile from "./Events";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from "./Drawer/DrawerNavigator";
import LoginScreen from "./LoginScreen";
import TransactionHistory from "./Transaction";
import ThankYouPage from "./ThankYou";
import GetstartedPage from "./GetStarted";
import FirstScreen from "./FirstScreen";
import Register from "./Register";
import AdminLogin from "./AdminLogin";
import AdminGenerate from "./Admin";
import Notifications from "./Notifications";


const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="getStarted"
          options={{
            headerTitleAlign: "center",
            headerShown: false,
          }}
          component={GetstartedPage}
        />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen
          name="DrawerNavigator"
          options={{ headerShown: false }}
          component={DrawerNavigator}
        />
        <Stack.Screen
          name="LoginScreen"
          options={{ headerShown: false }}
          component={LoginScreen}
        />
        <Stack.Screen
          name="AdminLogin"
          options={{ headerShown: false }}
          component={AdminLogin}
        />
        <Stack.Screen
          name="Admin"
          options={{ headerShown: false }}
          component={AdminGenerate}
        />
        <Stack.Screen
          name="Register"
          options={{ headerShown: false }}
          component={Register}
        />
        <Stack.Screen
          name="ThankYouPage"
          options={{ headerShown: false }}
          component={ThankYouPage}
        />
        <Stack.Screen
          name="Notifications"
          options={{ headerShown: false }}
          component={Notifications}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
