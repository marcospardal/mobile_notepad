import React from 'react';
import { Provider } from 'react-redux';
import Routers from './routes';

import './configs/statusBarConfig';
import { store } from './store';

function App() {
    return(
        <Provider store={store}>
            <Routers />
        </Provider>
    )
};

export default App;