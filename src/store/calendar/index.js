export default function reducer(state = [], action){
    switch(action.type){
        case 'add_appointment':
            return [...state, action.appointment];
        case 'remove_appointment':
            return state.filter((appointment) => {return appointment.key !== action.appointment.key});
        case "edit_appointment":
            return state.map((appointment) => {return appointment.key === action.appointment.key ? action.appointment : appointment});
        default:
            return state;
    }
}

export const addAppointment = (appointment) => {
    return {
        type: "add_appointment",
        appointment
    }
}

export const removeAppointment = (appointment) => {
    return {
        type: "remove_appointment",
        appointment
    }
}

export const editAppointment = (appointment) => {
    return {
        type: "edit_appointment",
        appointment
    }
}