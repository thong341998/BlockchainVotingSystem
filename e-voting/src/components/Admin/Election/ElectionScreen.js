import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, TextInput } from 'react-native'
import Modal from 'react-native-modal';

var screenWidth = Dimensions.get('window').width;

const VoteItem = (props) => {
    return (
        <TouchableOpacity style={{ flexDirection: 'row', backgroundColor: '#fff', borderRadius: 10 }}>
            <Image source={{ uri: 'https://en.as.com/en/imagenes/2019/09/24/football/1569310945_447431_noticia_normal.jpg' }} style={{ width: 200, height: 100, margin: 10 }} />
            <View style={{ flexDirection: 'column', justifyContent: 'flex-start' }}>
                <Text style={{
                    margin: 10,
                    fontSize: 16,
                    fontWeight: 'bold'
                }}>Ronaldo</Text>
                <Text style={{
                    margin: 10,
                    fontSize: 14,
                }}>Age: 34</Text>
            </View>

            <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start' }}>
                <Text style={{
                    margin: 10,
                    fontSize: 16,
                    fontWeight: 'bold'
                }}>Votes</Text>
                <Text style={{
                    margin: 10,
                    fontSize: 14,
                    fontWeight: 'bold',
                    color: 'red'
                }}>5</Text>
            </View>


        </TouchableOpacity>

    );
}

export default function ElectionScreen(props) {

    const [modalOpen, setModalOpen] = useState(false);
    const [candidateName, setCandidateName] = useState('');


    const EndElection = () => {

    }

    const AddCandidate = (candidateName) => {
        setModalOpen(false);
    }

    const CloseModalCandidate = () => {
        setModalOpen(false);
    }

    const OpenModalCandidate = () => {
        setModalOpen(true);
    }
    return (
        <View style={styles.container}>
            <VoteItem />
            <VoteItem />

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
                    >Add new candidate</Text>

                    <TextInput placeholder='Candidate name' style={{
                        width: screenWidth - 100,
                        margin: 10,
                        height: 80
                    }}
                        onChangeText={text => setCandidateName(text)}
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

                            onPress={() => {
                                AddCandidate(candidateName)
                            }}
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
                            onPress={() => CloseModalCandidate()}
                        >
                            <Text>Close</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </Modal>

            <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity
                    style={{
                        backgroundColor: 'blue',
                        borderRadius: 5,
                        width: 100,
                        height: 50,
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginLeft: 10,
                        alignSelf: 'center',
                        marginTop: 10
                    }}

                    onPress={() => setModalOpen(true)}
                >
                    <Text>Add candidate</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        backgroundColor: 'red',
                        borderRadius: 5,
                        width: 100,
                        height: 50,
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginLeft: 10,
                        alignSelf: 'center',
                        marginTop: 10
                    }}

                    onPress={EndElection}
                >
                    <Text>End election</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
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
        height: 250,
        justifyContent: 'center',
        backgroundColor: '#fff'
    }
})
