import React from 'react';
import { View, TouchableOpacity, Text, Image, StyleSheet, TextInput } from 'react-native';
import colors from '../helpers/colors';

const LoginScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.topView}>
                <Text style={styles.secondText}>Login</Text>
                <Text style={styles.alText}>Email</Text>
                <View style={styles.inputView}>
                    <Image source={require('../assets/images/ic_email.png')} style={styles.icon} />
                    <TextInput style={styles.input} placeholder="abc@example.com" />
                </View>
                <Text style={styles.alText}>Your Password</Text>
                <View style={styles.inputView}>
                    <Image source={require('../assets/images/ic_password.png')} style={styles.icon} />
                    <TextInput style={styles.input} placeholder="********" />
                </View>
                <TouchableOpacity onPress={() => { navigation.navigate('ForgotPassword') }}>
                    <Text style={styles.loginText}>Forgot Password?</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity
                style={styles.mainButton}
                onPress={() => { navigation.navigate('HomeScreen') }}
            >
                <Text style={styles.buttonText2}>Login</Text>
            </TouchableOpacity>
            <View style={styles.lineSeperator} />

            <TouchableOpacity
                style={styles.button}
                onPress={() => { }}
            >
                <View style={styles.buttonContent}>
                    <Image
                        source={require('../assets/images/ic_google.png')}
                        style={styles.icon}
                    />
                    <Text style={styles.buttonText}>Sign Up with Google</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { navigation.navigate('RegisterScreen') }}>
                <Text style={styles.alText}>Don’t have an account? <Text style={styles.loginText}>Register</Text></Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    topView: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        width: '90%',
        marginBottom: 15
    },
    inputView: {
        backgroundColor: 'white',
        borderColor: colors.app_color,
        borderRadius: 10,
        borderWidth: 1,
        paddingVertical: 15,
        paddingHorizontal: 15,
        marginVertical: 8,
        width: '100%',
        flexDirection: 'row',
    },
    lineSeperator: {
        height: 1,
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        width: '90%',
        marginVertical: 20
    },
    button: {
        backgroundColor: 'white',
        borderColor: 'black',
        borderRadius: 10,
        borderWidth: 1,
        paddingVertical: 15,
        paddingHorizontal: 20,
        marginVertical: 8,
        width: '90%',
        marginHorizontal: '5%',
    },
    mainButton: {
        backgroundColor: colors.app_color,
        borderRadius: 10,
        paddingVertical: 17,
        marginVertical: 8,
        width: '90%',
        marginHorizontal: '5%',
    },
    buttonContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 17,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    buttonText2: {
        fontSize: 17,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white'
    },
    secondText: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.app_color
    },
    alText: {
        fontSize: 17,
        fontWeight: '300',
        textAlign: 'center',
        marginTop: 15
    },
    loginText: {
        fontSize: 17,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.app_color,
        textDecorationLine: 'underline',
    },
    icon: {
        width: 24,
        height: 24,
        marginRight: 10
    },
    input: {
        fontSize: 18,
        textAlign:'center'
    },
});

export default LoginScreen;