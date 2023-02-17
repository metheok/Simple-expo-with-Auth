import React, { Component } from "react";
import { View, Text, Button } from "react-native";
import { Input } from "@rneui/themed";
import { AuthContext } from "../../contexts/Auth";

export default LoginScreen = (props) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const state = React.useContext(AuthContext);

  const login = async () => state.setAuth(true);

  return (
    <View
      style={{
        marginHorizontal: 80,
        marginVertical: 100,
      }}
    >
      <Text style={{ textAlign: "center", marginVertical: 20 }}>
        Login Page
      </Text>

      <Input defaultValue={email} onChangeText={setEmail} placeholder="Email" />
      <Input
        defaultValue={password}
        onChangeText={setPassword}
        secureTextEntry={true}
        placeholder="Password"
      />

      <Button onPress={() => login()} title="Submit"></Button>
      <Button
        title="Signup"
        onPress={() => props.navigation.navigate("Signup")}
      ></Button>
    </View>
  );
};
