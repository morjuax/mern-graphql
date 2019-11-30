import React from 'react';
import './App.css';
import {Provider} from 'react-redux'
import store from './store'
import ContainerApp from "./components/ContainerApp";
import 'materialize-css/dist/css/materialize.min.css'

const App = () => (
    <Provider store={store}>
        <ContainerApp/>
    </Provider>
);


export default App;
