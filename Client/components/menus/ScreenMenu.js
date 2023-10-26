import React, { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../../screens/auth/Home";
import Register from "../../screens/auth/Register";
import Login from "../../screens/auth/Login";
import HeaderMeu from "./HeaderMeu";
import Post from "../../screens/auth/Post";
import Account from "../../screens/auth/Account";
import Myposts from "../../screens/auth/MyPost";

const ScreenMenu = () => {
  //global state
  const [state, setState] = useContext(AuthContext);

  //auth condition
  const authenticatedUser = state?.user && state?.token;

  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName="Login">
      {authenticatedUser ? (
        <>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              title: "full stack app",
              headerRight: () => <HeaderMeu />,
            }}
          />
          <Stack.Screen
            name="Post"
            component={Post}
            options={{
              headerbackTite: "Back",
              headerRight: () => <HeaderMeu />,
            }}
          />
          <Stack.Screen
            name="MyPosts"
            component={Myposts}
            options={{
              headerbackTite: "Back",
              headerRight: () => <HeaderMeu />,
            }}
          />
          <Stack.Screen
            name="Account"
            component={Account}
            options={{
              headerbackTite: "Back",
              headerRight: () => <HeaderMeu />,
            }}
          />
        </>
      ) : (
        <>
          <Stack.Screen
            name="Register"
            component={Register}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
        </>
      )}
    </Stack.Navigator>
  );
};

export default ScreenMenu;
