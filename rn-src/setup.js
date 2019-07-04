
'use strict';
import React, { Component } from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import Store from './store/configureStore';

import Toast from './components/ToastView';
import Routers from './pages/Routers';

console.disableYellowBox = true;
class setup extends Component {
    render() {
        return (
            <Provider store={Store.store}>
                 <PersistGate loading={null} persistor={Store.persistor}>
                    <Routers/>
                </PersistGate>
                <Toast ref={(ref) => {
                    global.toastRef = ref;
                }} />
            </Provider>

        )
    }
}
module.exports = setup;


