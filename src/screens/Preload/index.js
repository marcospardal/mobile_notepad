import React, { useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';

//styles
import styles from './styles';

//actions
import { addNote } from '../../store/notes';
import { addAppointment } from '../../store/calendar';

function Preload(props) {
    const dispatch = useDispatch();

    async function fetchData() {
        const notes = await AsyncStorage.getItem("notes");
        const appointments = await AsyncStorage.getItem("appointments");

        let notesSaved = JSON.parse(notes);
        let savedAppointments = JSON.parse(appointments);

        if(notesSaved) {
            notesSaved.map(note => dispatch(addNote(note)))
        }

        if(savedAppointments) {
            savedAppointments.map(appointment => dispatch(addAppointment(appointment)))
        }

        props.navigation.navigate("Main")
    }

    useEffect(
        () => {fetchData()}, []
    )

    return(
        <View style={styles.container}>
            <Icon 
                name={"notebook-outline"}
                color={"#FFF"}
                size={90}
            />
            <ActivityIndicator color={"#FFF"}/>
        </View>
    )
};

export default Preload;