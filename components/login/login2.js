import React, { Component } from 'react';
import { Text, View, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import GoogleSigninButtonComponent from '../google-signin-button/googleSigninButton';
import SignUp2 from '../signup/signup2';
import { LoginStyles } from './login.style';
// import SignUpScreen from './screens/SignUpScreen';

export default class Login2 extends Component {

    state = {
        newAccount: false
    };

    renderHeaderTextContainer = () => (
        <View style={LoginStyles.headerContainer}>
            <Text style={LoginStyles.titleTextStyle}>
                Welcome Back!
            </Text>
            <View style={{ marginTop: 16 }}>
                <Text>
                    Please sign in to your account
                </Text>
            </View>
        </View>
    )

    renderInputContainer = () => (
        <View style={LoginStyles.textInputContainer}>
            <TextInput
                placeholder={"Please sign in to your account"}
                placeholderTextColor={"#6C6D72"}
                onChangeText={() => {
                    console.log("usernameChangeText==== clicked");
                }} />
            <TextInput
                placeholder="Password"
                placeholderTextColor={"#6C6D72"}
                secureTextEntry
                onChangeText={() => {
                    console.log("passwordChangeText==== clicked");
                }} />
            <TouchableOpacity style={LoginStyles.forgotButtonStyle} onPress={() => {
                console.log("forgotButton==== clicked");
            }}>
                <Text style={LoginStyles.forgotPasswordTextStyle}>
                    Forgot Password?
                </Text>
            </TouchableOpacity>
        </View>
    )

    renderLoginButtonsContainer = () => {
        return (
            <View style={LoginStyles.bottomButtonContainer}>
                <TouchableOpacity style={LoginStyles.signInButtonStyle} onPress={() => {
                    console.log("signInButton==== clicked");
                }}>
                    <Text style={LoginStyles.signInButtonTextStyle}>
                        Sign In
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={LoginStyles.googleButtonStyle} onPress={() => {
                    console.log("signInButton google==== clicked");
                }}>
                    {/* <Image source={require("./Logo/google.png")} style={LoginStyles.logoImageStyle} /> */}
                    {/* <Text style={LoginStyles.googleButtonTextStyle}>Sign In With Google</Text> */}
                    <GoogleSigninButtonComponent/> 
                </TouchableOpacity>
            </View>
        )
    }

    renderSignUpButtonContainer = () => (
        <View style={LoginStyles.signUpButtonContainer}>
            <Text style={LoginStyles.signUpTextStyle}>Don't Have An Account ?</Text>
            <TouchableOpacity style={LoginStyles.signUpButtonStyle} onPress={() => {
                console.log("handleSignUp==== clicked");
                this.setState({ newAccount: true });
            }}>
                <Text style={LoginStyles.signUpButtonTextStyle}>Sign Up</Text>
            </TouchableOpacity>
        </View>
    )

    renderScreenChange = () => {
        if (!this.state.newAccount) {
            return (
                <View style={{ flex: 1 }}>
                    {this.renderHeaderTextContainer()}
                    {this.renderInputContainer()}
                    {this.renderLoginButtonsContainer()}
                    {this.renderSignUpButtonContainer()}
                </View>
            )
        }
        else {
            return (
                <View style={{ flex: 1 }}>
                    <SignUp2 handleSignIn={() => this.setState({ newAccount: false })} />
                </View>
            )
        }
    }

    render() {
        return (
            <SafeAreaView style={LoginStyles.containerStyle}>
                <View style={LoginStyles.mainContainer}>{this.renderScreenChange()}</View>
            </SafeAreaView>
        );
    }
}