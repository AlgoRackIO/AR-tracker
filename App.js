/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */


import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { firebase } from "@react-native-firebase/auth";
import Login from "./components/login";
import SignUp from "./components/signup";
import { primaryColor } from "./constants/common";
import GoogleSigninButtton from "./components/googleSigninButton";

export default class MainApp extends Component {
  state = {
    isLogin: false,
    authenticated: false
  };

  componentDidMount() {
    this.__isTheUserAuthenticated();
  }

  __isTheUserAuthenticated = () => {
    let user = firebase.auth().currentUser;
    if (user) {
      console.log(user);

      this.setState({ authenticated: true });
    } else {
      this.setState({ authenticated: false });
    }
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        {this.state.authenticated ? (
          <View style={styles.containerStyle}>
            <Text style={{ textAlign: "center" }}>email {firebase.auth().currentUser.email} </Text>

            <View style={styles.loginButtonContainerStyle}>
              <TouchableOpacity
                style={styles.loginButtonStyle}
                onPress={async () => {
                  await firebase.auth().signOut();
                }}
              >
                <Text style={styles.loginButtonTextStyle}> Log Out</Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <View style={{ flex: 1 }}>
            {this.state.isLogin ? <Login /> : <SignUp />}
            <GoogleSigninButtton/>

            <View style={styles.loginButtonContainerStyle}>
              <TouchableOpacity style={styles.loginButtonStyle} onPress={() => this.setState(state => ({ isLogin: !state.isLogin }))}>
                <Text style={styles.loginButtonTextStyle}> {this.state.isLogin ? "New? Create account." : "Already have account? Log In"}</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    justifyContent: "space-around"
  },
  loginButtonContainerStyle: {
    flex: 0.2,
    justifyContent: "center",
    alignItems: "center"
  },
  loginButtonStyle: {
    alignItems: "center"
  },
  loginButtonTextStyle: {
    color: primaryColor
  }
});
