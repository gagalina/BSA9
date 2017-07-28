import React, {Component}  from 'react';
import '../css/index.sass';
import NewUserField from './NewUserField';
import UserList from './UserList';
import User from './User';
import FilterComponent from './FilterComponent';



export default class MainLayout extends Component {

    render() {
        return (
            <div className="main">
                <User/>
                <UserList/>
                <NewUserField/>
                <FilterComponent/>
            </div>
        )
    }
}


