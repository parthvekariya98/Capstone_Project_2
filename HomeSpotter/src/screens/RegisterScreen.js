import React from 'react';
import { View, TouchableOpacity, Text, Image, StyleSheet, TextInput, SafeAreaView } from 'react-native';
import colors from '../helpers/colors';

const RegisterScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.topView}>
                <Text style={styles.secondText}>Register</Text>
                <Text style={{...styles.alText, marginTop: 1, marginBottom:10}}>Create an account to access all the features of HomeSpotter!</Text>
                <Text style={styles.alText}>Email</Text>
                <View style={styles.inputView}>
                    <Image source={require('../assets/images/ic_email.png')} style={styles.icon} />
                    <TextInput style={styles.input} placeholder="abc@example.com" />
                </View>
                <Text style={styles.alText}>Your Name</Text>
                <View style={styles.inputView}>
                    <Image source={require('../assets/images/ic_user.png')} style={styles.icon} />
                    <TextInput style={styles.input} placeholder="jack sparrow" />
                </View>
                <Text style={styles.alText}>Your Password</Text>
                <View style={styles.inputView}>
                    <Image source={require('../assets/images/ic_password.png')} style={styles.icon} />
                    <TextInput style={styles.input} placeholder="********" />
                </View>
                
            </View>
            <TouchableOpacity
                style={styles.mainButton}
                onPress={() => { }}
            >
                <Text style={styles.buttonText2}>Register</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { }}>
                <Text style={styles.alText}>Already have an account? <Text style={styles.loginText}>Login</Text></Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white'
    },
    topView: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        width: '90%',
        marginTop: '10%',
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
    mainButton: {
        backgroundColor: colors.app_color,
        borderRadius: 10,
        paddingVertical: 17,
        marginVertical: 8,
        width: '90%',
        marginHorizontal: '5%',
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

export default RegisterScreen;