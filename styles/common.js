import { StyleSheet } from "react-native";
import { primaryColor } from "../constants/common";

export const commonStyles = StyleSheet.create({
    containerStyle: {
        flex: 1,
        justifyContent: "space-around"
    },
    headerContainerStyle: {
        flex: 0.2,
        alignItems: "center"
    },
    headerTitleStyle: {
        color: primaryColor,
        fontSize: 30,
        fontWeight: "bold"
    },
    formContainerStyle: {
        justifyContent: "space-around"
    },
    textInputStyle: {
        height: 60,
        borderRadius: 6,
        backgroundColor: "transparent",
        borderColor: "#888",
        borderWidth: 1
    },
    signInButtonContainerStyle: {
        flex: 0.3,
        alignItems: "flex-end"
    },
    signInButtonStyle: {
        width: 130,
        height: 50,
        flexDirection: "row",
        justifyContent: "center",
        borderRadius: 130 / 4,
        alignItems: "center",
        backgroundColor: "white"
    },
    signInButtonTextStyle: {
        color: "black",
        textAlign: "center",
        alignSelf: "center",
        fontSize: 14,
        fontWeight: "bold"
    },
    errorLabelContainerStyle: {
        flex: 0.1,
        alignItems: "center",
        justifyContent: "center"
    },
    errorTextStyle: {
        color: "red",
        textAlign: "center"
    }
});