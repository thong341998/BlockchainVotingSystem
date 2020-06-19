import React from 'react';
import {View, StyleSheet, Button} from 'react-native';
import CandidateList from './candidate-list';
import {candidates} from './candidate-data';
import {globalStyles} from '../../global/globalConstants'

export default function  CandidateScreen(props){
	
	return (
		<View style = {{flex:1}} >
		<CandidateList navigation = {props.navigation} candidates = {candidates} />
		</View>
	);
}


const styles = StyleSheet.create({
	
})