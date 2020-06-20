import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

export default function  StatusRound(props){
	
	const statusText = (status) =>{
		switch (status){
			case 0: return 'Ready';
			case 1: return 'In Progress';
			case 2: return 'Closed';
		}
	}
	const statusBackground = (status) =>{
		switch(status){
			case 0: return 'gray';
			case 1: return 'lime';
			case 2: return 'red';
		}
	}


	return (
		<View style = {[styles.round, {backgroundColor:statusBackground(props.status)},props.style]}>
		<Text style = {styles.status}>{statusText(props.status)}</Text>
		</View>
	);
}


const styles = StyleSheet.create({
	round:{
		borderRadius:90,
		paddingHorizontal:20,
		alignItems:'center',
		justifyContent:'center'
	},
	status:{
		color:'white'
	}
})