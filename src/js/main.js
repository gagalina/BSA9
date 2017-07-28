import React, {Component}  from 'react';
import ReactDOM from 'react-dom';
import '../css/index.sass';
import MainLayout from  './MainLayout'



class App extends Component {

    render() {
        return(
            <MainLayout/>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById("root")
);