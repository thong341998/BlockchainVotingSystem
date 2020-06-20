import React from 'react';
import {View, StyleSheet} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import ViewMyVoteScreen from './view-vote-screen';
import ViewVoteScreen from './view-vote-screen';
import {navigationName} from '../../global/globalConstants';
import CandidateStack from '../Candidate/candidate-stack'

export default function  VoteStack(props){
	
	const Stack = createStackNavigator();

	return (
		<Stack.Navigator>
		<Stack.Screen options = {{headerShown:false}} name = {navigationName.viewVoteScreen} component = {ViewVoteScreen} />
		<Stack.Screen options = {{title:'Candidate'}} name = {navigationName.candidateScreenStack} component = {CandidateStack} />
		</Stack.Navigator>
	);
}


const styles = StyleSheet.create({
	
})