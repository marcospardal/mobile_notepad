import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState, useEffect } from 'react';
import { ScrollView, View, Text } from 'react-native';
import { useSelector } from 'react-redux';

//components
import Header from '../../components/Header';

//styles
import styles from './styles';

function Calendar(props) {
    const calendar = useSelector(state => state.appointments);
    const [today, setToday] = useState([]);

    const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    const hours = [{"start": 6, "end": 7}, {"start": 7, "end": 8}, {"start": 8, "end": 9}, {"start": 10, "end": 11}, 
                    {"start": 11, "end": 12}, {"start": 12, "end": 13}, {"start": 13, "end": 14}, {"start": 14, "end": 15},
                    {"start": 15, "end": 16}, {"start": 16, "end": 17}, {"start": 17, "end": 18}, {"start": 18, "end": 19},
                    {"start": 19, "end": 20}]

    const date = new Date();
    const dayName = days[ date.getDay() ];
    const month = months[ date.getMonth() ];

    function setTodayAppointments() {
        const todayA = calendar.map(appointment => {
            if (appointment.date === date.getDate() && appointment.month === date.getMonth())
                return appointment;
        })

        setToday(todayA);

        AsyncStorage.setItem("calendar", JSON.stringify(calendar))
    }

    useEffect(
        () => {setTodayAppointments()}, []
    )

    return (
        <ScrollView style={styles.container}>
            <View>
                <Header title={"Calendar"} navigation={props.navigation}/>
                <View style={styles.calendar}>
                    <Text style={styles.title}>
                        {dayName}, {month} {date.getDate()} 
                    </Text>
                    {
                        !today.length ? 
                        <Text>
                            You don't have appointments today
                        </Text>
                        :
                        <Text>
                        </Text>
                    }
                    {
                        hours.map((hour, index) => (
                            <View style={styles.hourContainer} key={index}>
                                <Text style={styles.hours}>{hour.start}:00 - {hour.end}:00</Text>
                                <Text style={styles.appointmentTitle}>{today.map(app => {
                                    if (app.hour == hour.start && app.hour <= hour.end)
                                        return app.title
                                    })
                                }</Text>
                            </View>
                        ))
                    }
                </View>
            </View>
        </ScrollView>
    )
};

export default Calendar;