import React from 'react';
import {View, StyleSheet, Text, TouchableWithoutFeedback} from 'react-native';
import StatusRound from '../../components/Common/status-round';




export default function  VoteItem(props){

	const vote = props.vote;
	

	return (
		<TouchableWithoutFeedback onPress = {props.onPress}>
		<View style = {{marginVertical:10}}>
		<Text style = {styles.title}>{vote.title}</Text>
		<View style = {{flexDirection:'row', justifyContent:'space-between'}}>
		<Text>{vote.voteCount} votes</Text>
		<StatusRound isClose = {vote.isClose} />
		</View>
		</View>
		</TouchableWithoutFeedback>
	);
}


const styles = StyleSheet.create({
	title:{
		fontSize:20,
		fontWeight:'bold'
	}
})