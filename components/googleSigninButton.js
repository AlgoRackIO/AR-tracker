import React, { Component } from 'react';
import { GoogleSignin, statusCodes, GoogleSigninButton } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
import { Alert, Button, SafeAreaView, StyleSheet, View, Text } from 'react-native';
import { GOOGLE_CONSTANTS } from '../constants/main';

export default class GoogleSigninButtton extends Component {

    state = {
        userInfo: null,
        isSigninInProgress: false,
        userLoggedIn: null
    };

    constructor(props) {
        super(props);
        GoogleSignin.configure({
            webClientId: GOOGLE_CONSTANTS.GOOGLE_WEB_CLIENT_ID,
            androidClientId: GOOGLE_CONSTANTS.GOOGLE_ANDROID_CLIENT_ID
        });
    }

    signIn = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            const googleCredential = auth.GoogleAuthProvider.credential(userInfo.idToken);
            this.setState({ userInfo, userLoggedIn: true });
            return auth().signInWithCredential(googleCredential).then(() => Alert.alert("Success", "Signed in with Google!"));
        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                // user cancelled the login flow
                console.log("==error==", "statusCodes.SIGN_IN_CANCELLED")
            } else if (error.code === statusCodes.IN_PROGRESS) {
                // operation (e.g. sign in) is in progress already
                console.log("==error==", "statusCodes.IN_PROGRESS")
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                // play services not available or outdated
                console.log("==error==", "statusCodes.PLAY_SERVICES_NOT_AVAILABLE")
            } else {
                console.log("==error==some other error", error)
            }
        }
    };

    getCurrentUserInfo = async () => {
        try {
            const userInfo = await GoogleSignin.signInSilently();
            this.setState({ userInfo });
        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_REQUIRED) {
                // user has not signed in yet
            } else {
                // some other error
            }
        }
    };

    isSignedIn = async () => {
        const isSignedIn = await GoogleSignin.isSignedIn();
        this.setState({ isLoginScreenPresented: !isSignedIn });
    };

    getCurrentUser = async () => {
        const currentUser = await GoogleSignin.getCurrentUser();
        this.setState({ currentUser });
    };

    signOut = async () => {
        try {
            await GoogleSignin.revokeAccess();
            await GoogleSignin.signOut();
            this.setState({ userInfo: null, userLoggedIn: false });
            Alert.alert("Success", "Logout from Google!");
        } catch (error) {
            console.error(error);
        }
    };

    revokeAccess = async () => {
        try {
            await GoogleSignin.revokeAccess();
            console.log('deleted');
        } catch (error) {
            console.error(error);
        }
    };

    render() {
        return (
            <SafeAreaView>
                <View>
                    <GoogleSigninButton
                        style={{ width: 192, height: 48 }}
                        size={GoogleSigninButton.Size.Wide}
                        color={GoogleSigninButton.Color.Dark}
                        onPress={this.signIn}
                        disabled={this.state.isSigninInProgress} />
                </View>
                <View>
                    <Button
                        onPress={this.signOut}
                        title="LogOut">hell</Button>
                </View>
            </SafeAreaView>
        )
    }

}

const styles = StyleSheet.create({
    logoutButtonContainer: {
        flex: 0.2,
        justifyContent: "center",
        alignItems: "center"
    }
});