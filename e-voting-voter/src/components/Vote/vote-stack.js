import React from 'react';
import {View, StyleSheet} from 'react-native';
import ViewVoteScreen from './view-vote-screen';
import { createStackNavigator } from '@react-navigation/stack';
import {navigationName} from '../../global/globalConstants';
import CandidateStack from '../Candidate/candidate-stack';
import ViewResultScreen from './vote-result-screen';

export default function  VoteStack(props){
	
	const Stack = createStackNavigator();

	return (
		<Stack.Navigator>
		<Stack.Screen options = {{headerShown:false}} name = {navigationName.viewVoteScreen} component = {ViewVoteScreen} />
		<Stack.Screen options = {{title:'Candidate'}} name = {navigationName.candidateScreenStack} component = {CandidateStack} />
		<Stack.Screen options = {{title:'Result'}} name = {navigationName.voteResultScreen} component = {ViewResultScreen} />
		</Stack.Navigator>
	);
}


const styles = StyleSheet.create({
	
})