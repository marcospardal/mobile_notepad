import { createStore, combineReducers } from 'redux';

import notesReducer from './notes';
import appointmentReducer from './calendar';

const rootReducer = combineReducers({
    notes: notesReducer,
    appointments: appointmentReducer,
});

const store = createStore(rootReducer);

export { rootReducer, store }