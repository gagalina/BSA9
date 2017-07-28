import React, {Component}  from 'react';
import ReactDOM from 'react-dom';
import '../css/index.sass';
import MainLayout from  './MainLayout';
import configureStore from '../store/configureStore';
import {Provider} from 'react-redux';


const store = configureStore()


class App extends Component {

    render() {
        return(
            <MainLayout/>
        )
    }
}

ReactDOM.render(
    <Provider store={store}>
    <App/>
    </Provider>,
    document.getElementById("root")
);