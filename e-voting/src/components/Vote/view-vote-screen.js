import React from 'react';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import {elections} from './election-data';
import VoteList from './vote-list';

export default function  ViewVoteScreen({navigation}){


	return (
		<ScrollView >
			<VoteList navigation = {navigation} voteData = {elections} />
		</ScrollView>
	);
}


const styles = StyleSheet.create({
	
}) 