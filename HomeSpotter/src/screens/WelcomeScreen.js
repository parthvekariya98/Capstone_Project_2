import React from 'react';
import { View, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';
import colors from '../helpers/colors';

const WelcomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.topView}>
            <Text style={styles.firstText}>Welcome to</Text>
            <Text style={styles.secondText}>HomeSpotter</Text>
            <Text style={styles.thirdText}>A place where you can find your next Home...</Text>
            <Text style={styles.letText}>Let’s Get Started...</Text>
            </View>
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
            <TouchableOpacity
                style={styles.button}
                onPress={() => { navigation.navigate('LoginScreen') }}
            >
                <View style={styles.buttonContent}>
                    <Image
                        source={require('../assets/images/ic_email.png')}
                        style={styles.icon}
                    />
                    <Text style={styles.buttonText}>Sign Up with Email</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { }}>
                <Text style={styles.alText}>Already have an account? <Text style={styles.loginText}>Login</Text></Text>
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
    buttonContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'center'
    },
    buttonText: {
        fontSize: 17,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    firstText: {
        fontSize: 24,
        fontWeight: 'normal',
        textAlign: 'center',
    },
    secondText: {
        fontSize: 45,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.app_color
    },
    thirdText: {
        fontSize: 17,
        fontWeight: '300',
        textAlign: 'center',
    },
    letText: {
        fontSize: 17,
        fontWeight: '300',
        textAlign: 'center',
        marginTop: '15%'
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
        marginRight: 10,
    },
});

export default WelcomeScreen;