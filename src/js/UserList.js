import React, {Component}  from 'react';
import UserRow from './UserRow'
import 'bootstrap/dist/css/bootstrap.css'



export default class UserList extends Component {


    render() {

        let listItem = this.props.users.map((el) => {
            return <UserRow key={el.id} value={el} showCurrentUser={this.props.showCurrentUser} deleteUser={this.props.deleteUser}/>
        });

        return (
            <div>
                <ul className="list-group">
                    {listItem}
                </ul>
            </div>
        )
    }
}

