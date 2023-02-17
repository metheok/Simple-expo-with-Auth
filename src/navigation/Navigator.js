import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/AuthScreen/LoginScreen";
import SignupScreen from "../screens/AuthScreen/SignupScreen";
import { NavigationContainer } from "@react-navigation/native";
import { AuthContext } from "../contexts/Auth";
import LoadingScreen from "../screens/LoadingScreen";

function Navigator() {
  const state = React.useContext(AuthContext);
  if (state.auth == null) return <LoadingScreen />;
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {state?.auth ? (
          <>
            <Stack.Screen name="Home" component={HomeScreen} />
          </>
        ) : (
          <>
            <Stack.Screen name="Signup" component={SignupScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
