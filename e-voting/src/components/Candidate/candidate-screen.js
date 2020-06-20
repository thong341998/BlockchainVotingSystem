import React from 'react';
import {View, StyleSheet, Button, ScrollView, Text} from 'react-native';
import CandidateList from './candidate-list';
import {candidates} from './candidate-data';
import {globalStyles} from '../../global/globalConstants'

export default function  CandidateScreen(props){

	const vote = props.route.params.vote;
	const getCandidate = () =>{
		const result = [];
		vote.candidateIds.forEach((id) =>{
			var candidate = candidates.find((candidate) => candidate.id === id);
			if (candidate)
				result.push(candidate);
		})
		return result;
	}
	//console.log(vote);

	return (
		<ScrollView style = {{marginTop:10}}>
		<Text style = {styles.title}>{vote.title}</Text>
		<View style = {
			{
			marginTop:10,
			marginHorizontal:15,
			justifyContent:'center',
			alignItems:'center',
			borderRadius:90,
			paddingHorizontal:5,
			backgroundColor:'silver',
			height:30
			}}>
		<Text style = {styles.description}>{vote.startDay} - {vote.endDay}</Text>
		</View>
		<CandidateList navigation = {props.navigation} candidates = {getCandidate()} />
		</ScrollView>
	);
}


const styles = StyleSheet.create({
	title:{
		fontSize:25,
		fontWeight:'bold',
		marginHorizontal:15,

	},
	description:{
		fontSize:16,
	},
	candidate:{
		marginTop:10,
		fontSize:20,
		marginHorizontal:15,
		fontWeight:'bold'
	}
})