import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import React from "react";
import { AuthContext } from "../contexts/Auth";
export default function HomeScreen(props) {
  const state = React.useContext(AuthContext);

  const logout = () => state.setAuth(false);

  return (
    <View
      style={{
        marginHorizontal: 80,
        marginVertical: 100,
      }}
    >
      <Text style={{ textAlign: "center", marginVertical: 20 }}>
        Home Screen
      </Text>

      <Button onPress={() => logout()} title="Logout"></Button>
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
