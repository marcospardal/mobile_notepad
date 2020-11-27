import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import DatePicker from 'react-native-date-picker';
import { useDispatch } from 'react-redux';

//components
import Header from '../../components/Header';
import { addAppointment } from '../../store/calendar';

//styles 
import styles from './styles';

//actions

function AddAppointment(props) {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [date, setDate] = useState(new Date());

    const dispatch = useDispatch();

    function save() {
       const appointment = {
           "title": title,
           "description": body,
           "date": date.getDate(),
           "month": date.getMonth(),
           "hour": date.getHours(),
       }

       dispatch(addAppointment(appointment));
       props.navigation.navigate("Main");
    }

    return(
        <View style={styles.container}> 
            <Header title={"Add Appointment"} navigation={props.navigation}/>
            <View style={styles.input}>
                <TextInput 
                    style={styles.titleField}
                    placeholder="Title"
                    onChangeText={setTitle}
                    value={title}
                />
                <TextInput
                    onChangeText={setBody}
                    value={body}
                    multiline={true}
                    style={styles.descriptionField}
                    placeholder="Description" 
                />
                <DatePicker 
                    style={styles.datePicker}
                    date={date}
                    onDateChange={setDate}
                />
                <View style={styles.buttons}>
                    <TouchableOpacity onPress={save}>
                        <Text style={styles.textBtn}>
                            Save
                        </Text>
                    </TouchableOpacity>
                </View>                  
            </View> 
        </View>
    )
};

export default AddAppointment;