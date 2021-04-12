import { StyleSheet, Dimensions } from 'react-native';

const { width: ScreenWidth, height: ScreenHeight } = Dimensions.get('window');

export const LoginStyles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        justifyContent: "space-around"
    },
    bottomButtonContainer: {
        position: 'absolute',
        bottom: 80,
        height: ScreenHeight * 0.2,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    mainContainer: {
        backgroundColor: '#181A1F',
        alignItems: 'center',
        flex: 1,
    },
    headerContainer: {
        height: ScreenHeight * 0.28,
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleTextStyle: {
        fontSize: 24,
        color: '#fff',
        fontWeight: '600',
    },
    descriptionTextStyle: {
        fontSize: 15,
        color: '#696A6F',
    },
    textInputContainer: {
        height: ScreenHeight * 0.25,
        justifyContent: 'space-around',
        width: ScreenWidth * 0.85,
    },
    textInputStyle: {
        height: 75,
        fontSize: 16,
        paddingLeft: 32,
        backgroundColor: '#262A34',
        color: '#fff',
        borderRadius: 24,
    },
    forgotPasswordTextStyle: {
        color: '#6C6D72',
    },
    forgotButtonStyle: {
        height: 30,
        justifyContent: 'center',
        marginLeft: 'auto',
    },
    signInButtonStyle: {
        backgroundColor: '#5467FF',
        width: ScreenWidth * 0.85,
        height: 75,
        borderRadius: 24,
        justifyContent: 'center',
        alignItems: 'center',
    },
    signInButtonTextStyle: {
        color: '#fff',
        fontWeight: '600',
    },
    logoImageStyle: {
        width: 32,
        height: 32,
        marginRight: 12,
    },
    googleButtonStyle: {
        backgroundColor: '#FFFFFF',
        width: ScreenWidth * 0.85,
        height: 75,
        borderRadius: 24,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    googleButtonTextStyle: {
        color: '#181A1F',
        fontWeight: '600',
    },
    signUpButtonContainer: {
        position: 'absolute',
        bottom: 32,
        width: ScreenWidth * 0.9,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    signUpButtonStyle: {
        height: 40,
        justifyContent: 'center',
        marginLeft: 8,
    },
    signUpTextStyle: {
        fontSize: 14,
        color: '#fff',
    },
    signUpButtonTextStyle: {
        fontSize: 14,
        color: '#4251BC',
    },
});
