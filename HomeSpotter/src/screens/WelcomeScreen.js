import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const WelcomeScreen = ({ navigation }) => {

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Welcome</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		alignContent: 'center'
	}
});

export default WelcomeScreen;