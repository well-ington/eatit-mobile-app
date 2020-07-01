import React from 'react';
import { Provider } from 'react-redux';
import store from './store/reducer/main';
import App from './App';

const HocApp: React.FC = () => {
    return <Provider store={store}>
        <App/>
    </Provider>
}

export default HocApp;