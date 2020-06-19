import React from 'react';
import {View, StyleSheet, TouchableWithoutFeedback, Text} from 'react-native';

export default function  CandidateButton(props){
	
	const candidate = props.candidate;

	return (
		<TouchableWithoutFeedback onPress = {props.onPress}>
		<View style = {styles.item}>
		<Text style = {styles.name}>{candidate.name}</Text>
		<Text style = {{fontSize:18, marginHorizontal:15}}>{candidate.description}</Text>
		</View>
		</TouchableWithoutFeedback>
	);
}


const styles = StyleSheet.create({
	item:{
		marginVertical:10
	},

	name:{
		fontSize:22,
		fontWeight:'bold',
		marginHorizontal: 15
	}
})