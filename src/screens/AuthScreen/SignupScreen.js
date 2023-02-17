import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Input } from "@rneui/themed";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext } from "../../contexts/Auth";
import React from "react";
export default function SignupScreen(props) {
  const state = React.useContext(AuthContext);

  const signup = () => state.setAuth(true);

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <View
      style={{
        marginHorizontal: 80,
        marginVertical: 100,
      }}
    >
      <Text style={{ textAlign: "center", marginVertical: 20 }}>
        Signup Page
      </Text>

      <Input defaultValue={email} onChangeText={setEmail} placeholder="Email" />
      <Input
        defaultValue={password}
        onChangeText={setPassword}
        secureTextEntry={true}
        placeholder="Password"
      />

      <Button onPress={() => signup()} title="Submit"></Button>
      <Button
        title="Login"
        onPress={() => props.navigation.navigate("Login")}
      ></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",

    justifyContent: "center",
  },
});
