import React from 'react';
import {View, StyleSheet} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import ViewMyVoteScreen from './view-my-vote-screen';
import ViewResultScreen from './vote-result-screen';
import {navigationName} from '../../global/globalConstants';
export default function  ViewMyVoteStack(props){
	

	const Stack = createStackNavigator();

	return (
		<Stack.Navigator>
		<Stack.Screen options = {{headerShown:false}} name = {navigationName.viewMyVoteScreen} component = {ViewMyVoteScreen} />
		<Stack.Screen options = {{title:'Result'}} name = {navigationName.voteResultScreen} component = {ViewResultScreen} />
		</Stack.Navigator>
	);

	return (
		<View>
		
		</View>
	);
}


const styles = StyleSheet.create({
	
})