import React, { Component } from 'react';
import { Text, View, SafeAreaView, TouchableHighlight, ActivityIndicator, TextInput, Alert } from "react-native";
import auth from "@react-native-firebase/auth";
import { commonStyles } from '../styles/common';
import { isValidEmail, primaryColor } from '../constants/common';

export default class SignUp extends Component {

    state = {
        fetching: false,
        isValid: true,
        email: "",
        password: "",
        error: "",
    };

    doSignUp = async () => {
        if (!this.state.email) {
            this.setState({ error: "Email required", isValid: false });
            return;
        } else if (!this.state.password || this.state.password.length < 5) {
            this.setState({ error: "Weak password, minimum 5 chars", isValid: false });
            return;
        } else if (!isValidEmail(this.state.email)) {
            this.setState({ error: "Invalid Email", isValid: false });
            return;
        }

        try {
            let response = await auth().createUserWithEmailAndPassword(this.state.email, this.state.password);
            if (response && response.user) {
                Alert.alert("Success ✅", "Account created successfully");
            }
        } catch (e) {
            console.error(e.message);
        }
    };


    render() {
        return (
            <SafeAreaView style={commonStyles.containerStyle}>
                <View style={{ flex: 0.2 }}>{!!this.state.fetching && <ActivityIndicator color={primaryColor} />}</View>
                <View style={commonStyles.headerContainerStyle}>
                    <Text style={commonStyles.headerTitleStyle}> Sign Up </Text>
                </View>
                <View style={commonStyles.formContainerStyle}>
                    <TextInput
                        label={"Email"}
                        autoCapitalize={"none"}
                        keyboardType="email-address"
                        style={commonStyles.textInputStyle}
                        placeholder="Email"
                        onChangeText={text => {
                            this.setState({ email: text });
                        }}
                        error={this.state.isValid}
                    />
    
                    <TextInput label={"Password"} secureTextEntry autoCapitalize={"none"} style={commonStyles.textInputStyle} selectionColor={primaryColor} placeholder="Password" error={this.state.isValid} onChangeText={text => this.setState({ password: text })} />
                </View>
                {this.state.error ? (
                    <View style={commonStyles.errorLabelContainerStyle}>
                        <Text style={commonStyles.errorTextStyle}>{this.state.error}</Text>
                    </View>
                ) : null}
                <View style={commonStyles.signInButtonContainerStyle}>
                    <TouchableHighlight style={commonStyles.signInButtonStyle} onPress={this.doSignUp} underlayColor={primaryColor}>
                        <View
                            style={{
                                flexDirection: "row",
                                justifyContent: "space-around"
                            }}
                        >
                            <Text style={commonStyles.signInButtonTextStyle}>Continue</Text>
                        </View>
                    </TouchableHighlight>
                </View>
            </SafeAreaView>
        );
    }
}
