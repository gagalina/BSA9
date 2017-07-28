import React, {Component}  from 'react';
import '../css/index.sass';
import NewUserField from './NewUserField';
import UserList from './UserList';
import User from './User';
import _ from 'lodash';


export default class MainLayout extends Component {

    constructor() {
        super();
        this.state = {
            users: [
                {
                    name: "John Snow",
                    id: 1
                },
                {
                    name: "Angelina Jolie",
                    id: 2
                },
                {
                    name: "Christopher Nolan",
                    id: 3
                }],
            currentUser: {
                name: "John Snow",
                id: 1
            }
        };
    }

    shouldComponentUpdate(nextState) {
        return !_.isEqual(this.state, nextState)
    }

    showCurrentUser(id) {
        let currentUser = this.state.users.find((el) => {
            return (el.id === id)
        });
        this.setState({
            currentUser: currentUser
        });
    }
    ;

    addNewUser(newUser) {
        let userArray = this.state.users.slice();
        userArray.push(newUser);
        this.setState({
            users: userArray,
            currentUser: userArray[0]
        });
    }
    ;


    deleteUser(id) {
        let userArray = this.state.users.slice();
        let userIndex = null;

        this.state.users.map((el, index) => {
            (el.id === id) ? userIndex = index : null;
        });

        userArray.splice(userIndex, 1);

        let updatedState = {
            users: userArray
        };

        if (this.state.currentUser.id === id) {
            updatedState['currentUser'] = userArray.length >= 1 ? userArray[0] : {
                name: null,
                id: null
            };
        }

        this.setState(
            updatedState
        );
    }

    render() {
        let showCurrentUser = this.showCurrentUser.bind(this);
        let addNewUser = this.addNewUser.bind(this);
        let deleteUser = this.deleteUser.bind(this);

        return (
            <div className="main">
                <User currentUser={this.state.currentUser}/>
                <UserList users={this.state.users} showCurrentUser={showCurrentUser} deleteUser={deleteUser}/>
                <NewUserField addNewUser={addNewUser}/>
            </div>

        )
    }
    ;
};


