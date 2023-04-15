import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import WelcomeScreen from '../screens/WelcomeScreen';

const Stack = createStackNavigator();

const AppNavigation = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="WelcomeScreen" component={WelcomeScreen} options={{ headerShown: false }} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default AppNavigation;