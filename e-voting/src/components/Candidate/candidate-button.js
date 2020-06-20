import React from 'react';
import {View, StyleSheet, TouchableWithoutFeedback, Text} from 'react-native';

const selectedStyle = {
	background:'blue',
	foreground:'white'
}

const noneSelectedStyle = {
	background: '#eeeeee',
	foreground: '#000000',
}

export default function  CandidateButton(props){
	
	const candidate = props.candidate;
	const getSelectedItemStyle = (isSelected) => {
		if (isSelected)
			return selectedStyle;
		return noneSelectedStyle;
	}

	var selectedItemStyle = getSelectedItemStyle(props.isSelected);

	return (
		<TouchableWithoutFeedback onPress = {props.onPress}>
		<View style = {[styles.item, {backgroundColor:selectedItemStyle.background}]}>
		<Text style = {[styles.name,{color:selectedItemStyle.foreground}]}>{candidate.name}</Text>
		<Text style = {{fontSize:18, marginHorizontal:15,color:selectedItemStyle.foreground}}>{candidate.description}</Text>
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