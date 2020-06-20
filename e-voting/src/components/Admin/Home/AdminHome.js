import React, { useState } from 'react'
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Dimensions, TextInput } from 'react-native'
import Modal from 'react-native-modal';
import { MaterialIcons } from '@expo/vector-icons';
import { ScreenKey } from '../../../global/globalConstants';
import DatePicker from 'react-native-datepicker';
import StatusRound from '../../Common/status-round';


const Card = (props) => {
    return (
        <View style={styles.card}>
            <View style={styles.cardContent}>
                {props.children}
            </View>
        </View>
    )
}

var screenWidth = Dimensions.get('window').width;

export default function AdminHome(props) {
    const [modalOpen, setModalOpen] = useState(false);
    const [electionName, setElectionName] = useState('');
    const [electionDescription,setElectionDescription] = useState('');
    const [startDay,setStartDay] = useState();
    const [endDay, setEndDay] = useState();


    const [elections, setElections] = useState([
        {
            voteId: 0,
            title: 'Election 1',
            status:0,
        },
        {
            voteId: 1,
            title: 'Election 2',
            status:1
        },
        {
            voteId: 2,
            title: 'Election 3',
            status:2
        }
    ])

    const onHandlePress = (item, id) => {
        props.navigation.navigate(ScreenKey.ElectionScreen, {
            election: item
        })
    }

    const renderElection = (item) => {
        return (
            <TouchableOpacity onPress={() => {
                onHandlePress(item)
            }}>
                <Card>
                    <Text style={styles.titleText}>{item.title}</Text>
                    <StatusRound style = {{marginLeft:40}} status = {item.status} />
                </Card>
            </TouchableOpacity>
        );
    }

    const AddElection = () => {
        if (electionName){
            let election = {
                voteId: elections.length + 1,
                title: electionNamesta,
                status:0,
            }
            
            setElections((currentElections) =>{
                return [election, ...currentElections];
            })
            setModalOpen(false);

        }
    }

    return (
        <View style={styles.container}>
            <Modal isVisible={modalOpen} animationType='slide'
                style={{
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <View style={styles.modalContent}>
                    <Text
                        style={{
                            marginLeft: 10,
                            fontSize: 20
                        }}
                    >Add new election</Text>

                    <TextInput placeholder='Election name' style={{
                        width: screenWidth - 100,
                        margin: 10,
                        height: 15
                    }}
                    onChangeText={text => setElectionName(text)}
                    />
                    <TextInput placeholder='Election description' style={{
                        width: screenWidth - 100,
                        margin: 10,
                        height: 20
                    }}
                    onChangeText={text => setElectionDescription(text)}
                    />

                    <DatePicker
        style={{width: 200,marginBottom:15}}
        mode="date"
        date = {startDay}
        placeholder="Start Day"
        format="DD/MM/YYYY"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date) => setStartDay(date)}
      />

       <DatePicker
        style={{width: 200,marginBottom:15}}
        mode="date"
        date = {endDay}
        placeholder="End Day"
        format="DD/MM/YYYY"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
          dateIcon: {
            position: 'absolute',
            left: 0,
            top: 4,
            marginLeft: 0
          },
          dateInput: {
            marginLeft: 36
          }
          // ... You can check the source to find the other keys.
        }}
        onDateChange={(date) => setEndDay(date)}
      />
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <TouchableOpacity
                            style={{
                                backgroundColor: 'red',
                                borderRadius: 5,
                                width: 100,
                                height: 50,
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginLeft: 10
                            }}

                            onPress={AddElection}
                        >
                            <Text>Add</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={{
                                backgroundColor: 'grey',
                                borderRadius: 5,
                                width: 100,
                                height: 50,
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginLeft: 10
                            }}
                            onPress={() => setModalOpen(false)}
                        >
                            <Text>Close</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </Modal>

            <MaterialIcons
                name='add'
                size={24}
                style={styles.modalToggle}
                onPress={() => setModalOpen(true)}
            />

            <FlatList
                data={elections}
                renderItem={({ item }) => renderElection(item)}
                keyExtractor={item => item.voteId.toString()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 6,
        elevation: 3,
        backgroundColor: '#fff',
        shadowOffset: { width: 1, height: 1 },
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 4,
        marginVertical: 6,
    },
    cardContent: {
        marginHorizontal: 18,
        marginVertical: 20,
        flexDirection:'row',
    },
    titleText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },

    container: {
        flex: 1,
        padding: 20,
    },
    modalToggle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#f2f2f2',
        padding: 10,
        borderRadius: 10,
        alignSelf: 'center'

    },
    modalClose: {
        marginTop: 20,
        marginBottom: 0,
    },
    modalContent: {
        width: screenWidth - 80,
        height: 300,
        //justifyContent: 'center',
        backgroundColor: '#fff'
    }
})
