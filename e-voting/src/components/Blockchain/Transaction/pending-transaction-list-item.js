import React from 'react';
import {View, StyleSheet, Text, Alert, TouchableOpacity} from 'react-native';
import {elections} from '../../Admin/Election/election-data';

export default function  PendingTransactionListItem(props){
	
	const pendingTransaction = props.transaction;

	return (
		<View style = {styles.transaction}>
		<Text>{pendingTransaction.voterPublicKey}</Text>
		</View>
	);
}


const styles = StyleSheet.create({
	transaction:{
		backgroundColor:'cornsilk',
		paddingHorizontal:20,
		paddingVertical:20,
		borderRadius:50
	}
})