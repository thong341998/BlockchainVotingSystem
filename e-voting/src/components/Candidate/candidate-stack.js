import React from 'react';
import {View, StyleSheet} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {navigationName} from '../../global/globalConstants';
import VoteScreen from '../Voter/vote-screen';
import CandidateScreen from './candidate-screen';

export default function  CandidateStack(props){
	
	const Stack = createStackNavigator();
  	return (
     <Stack.Navigator initialRouteName = {navigationName.candidateScreen}>
    <Stack.Screen name = {navigationName.voteScreen} component = {VoteScreen} />
    <Stack.Screen name = {navigationName.candidateScreen} component = {CandidateScreen} />
    </Stack.Navigator>
    )
}


const styles = StyleSheet.create({
	
})