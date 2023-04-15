import React from 'react';
import { View, TouchableOpacity, Text, Image, StyleSheet, TextInput, SafeAreaView } from 'react-native';
import colors from '../helpers/colors';

const ForgotPassword = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.topView}>
                <Text style={styles.secondText}>Forgot Password?</Text>
                <Text style={{...styles.alText, marginBottom: '10%'}}>Recover your password if you have forgot the password!</Text>
                
                <Text style={styles.alText}>Email</Text>
                <View style={styles.inputView}>
                    <Image source={require('../assets/images/ic_email.png')} style={styles.icon} />
                    <TextInput style={styles.input} placeholder="abc@example.com" />
                </View>
            </View>
            <TouchableOpacity
                style={styles.mainButton}
                onPress={() => { }}
            >
                <Text style={styles.buttonText2}>Submit</Text>
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
        marginTop: '10%'
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
        marginTop: 5
    },
    icon: {
        width: 24,
        height: 24,
        marginRight: 10
    },
    input: {
        fontSize: 18,
        textAlign: 'center'
    }
});

export default ForgotPassword;