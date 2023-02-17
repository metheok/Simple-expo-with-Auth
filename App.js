import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { AuthProvider } from "./src/contexts/Auth";
import Navigator from "./src/navigation/Navigator";
export default function App() {
  return (
    <AuthProvider>
      <Navigator />
    </AuthProvider>
  );
}
