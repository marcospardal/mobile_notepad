import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

//screens
import Preload from "./screens/Preload";
import BottomMenu from './components/BottomMenu';
import AddNote from './screens/AddNote';
import AddAppointment from './screens/AddAppointment';

const Routes = createSwitchNavigator(
    {
        "Preload": {
            screen: Preload
        },
        "Main": {
            screen: BottomMenu
        },
        "AddNote": {
            screen: AddNote
        },
        "AddAppointment": {
            screen: AddAppointment
        }
    }
);

export default createAppContainer(Routes);