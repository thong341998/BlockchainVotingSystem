import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import Axios from 'axios'

export default function TransactionScreen() {
    const [blocks, setBlocks] = useState(null)

    useEffect(() => {
        Axios.get('http://192.168.1.4:3000/block')
            .then(response => {
                console.log('succesful')
                console.log(response.data.result);
                setBlocks([...blocks, response.data.result]);
            })
            .catch(error => {
                console.log(error)
            });

    }, [])

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            {
                blocks ?
                    <View>
                        <Text>Previous Hash: {blocks[0].previousHash}</Text>
                    </View>
                    :
                    null
            }


        </View>
    )
}

const styles = StyleSheet.create({})
