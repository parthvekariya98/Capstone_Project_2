import React from 'react';
import { View, TouchableOpacity, Text, Image, StyleSheet, TextInput, SafeAreaView } from 'react-native';
import colors from '../helpers/colors';

const HomeScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <Text>HomeScreen</Text>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    }
});

export default HomeScreen;