import React, { Component } from 'react';
import { Text, View, TextInput, TextStyle, TouchableOpacity, SafeAreaView } from 'react-native';
import { signupStyles } from './signup.style';


export default class SignUp2 extends Component {

    renderHeaderTextContainer = () => (
        <View style={signupStyles.headerContainer}>
            <Text style={signupStyles.titleTextStyle}>
                Create New Account
            </Text>
            <View style={{ marginTop: 16 }}>
                <Text style={signupStyles.descriptionTextStyle}>
                    Please fill in the form to continue
                </Text>
            </View>
        </View>
    )

    renderTextInputContainer = () => (
        <View style={signupStyles.textInputContainer}>
            <TextInput
                placeholder={"Full Name"}
                style={signupStyles.textInputStyle}
                onChangeText={() => {
                    console.log("clicked===fullNameOnChange")
                }} />
            <TextInput
                placeholder={"Email Address"}
                style={signupStyles.textInputStyle}
                onChangeText={() => {
                    console.log("clicked===emailOnChange")
                }} />
            <TextInput
                placeholder={"Password"}
                style={signupStyles.textInputStyle}
                secureTextEntry
                onChangeText={() => {
                    console.log("clicked===singUpPasswordChangeText")
                }} />
        </View>
    )

    renderSignUpButton = () => (
        <View style={signupStyles.signUpButtonContainer}>
            <TouchableOpacity style={signupStyles.signUpButtonStyle} onPress={() => {
                console.log("clicked===handleSignUpButton")
            }}>
                <Text style={signupStyles.signUpButtonTextStyle}>
                    Sign Up
                </Text>
            </TouchableOpacity>
        </View>
    )

    renderSignInTextContainer = () => (
        <View style={signupStyles.signInButtonContainer}>
            <Text style={signupStyles.signInQuestionTextStyle}>Have An Account?</Text>
            <TouchableOpacity style={signupStyles.signInButtonStyle} onPress={() => {
                console.log("clicked===handleSignin")
            }}>
                <Text style={signupStyles.signInButtonTextStyle}>Sign In</Text>
            </TouchableOpacity>
        </View>
    )

    render() {
        return (
            <SafeAreaView style={signupStyles.containerStyle}>
                <View style={signupStyles.mainContainer}>
                    {this.renderHeaderTextContainer()}
                    {this.renderTextInputContainer()}
                    {this.renderSignUpButton()}
                    {this.renderSignInTextContainer()}
                </View>
            </SafeAreaView>
        );
    }
}