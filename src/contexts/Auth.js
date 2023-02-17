import * as React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AuthContext = React.createContext({});

const AuthProvider = ({ children }) => {
  const [auth, setAuthState] = React.useState(null);

  // Get current auth state from AsyncStorage
  const getAuthState = async () => {
    try {
      const authDataString = await AsyncStorage.getItem("isLoggedIn");
      let authData = authDataString == "true" ? true : false;
      setAuthState(authData);
    } catch (err) {
      setAuthState({});
    }
  };

  // Update AsyncStorage & context state
  const setAuth = async (auth) => {
    try {
      await AsyncStorage.setItem("isLoggedIn", JSON.stringify(auth));
      let authData = JSON.stringify(auth) == "true" ? true : false;
      setAuthState(authData);
    } catch (error) {
      Promise.reject(error);
    }
  };

  React.useEffect(() => {
    getAuthState();
  }, []);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
