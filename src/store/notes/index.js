export default function reducer(state = [], action){
    switch(action.type){
        case 'add_note':
            return [...state, action.note];
        case 'remove_note':
            return state.filter((note) => {return note.title !== action.note.title});
        case "edit_note":
            return state.map((note) => {return note.key === action.note.key ? action.note : note});
        default:
            return state;
    }
}

export const addNote = (note) => {
    return {
        type: "add_note",
        note
    }
}

export const removeNote = (note) => {
    return {
        type: "remove_note",
        note
    }
}

export const editNote = (note) => {
    return {
        type: "edit_note",
        note
    }
}