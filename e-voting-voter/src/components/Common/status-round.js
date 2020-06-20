import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

export default function  StatusRound(props){
	
	const statusText = props.isClose ? 'Closed' : 'In Progress';
	const statusBackground = props.isClose ? 'red' : 'lime';


	return (
		<View style = {[styles.round, {backgroundColor:statusBackground}]}>
		<Text style = {styles.status}>{statusText}</Text>
		</View>
	);
}


const styles = StyleSheet.create({
	round:{
		borderRadius:90,
		paddingHorizontal:20,
	},
	status:{
		color:'white'
	}
})