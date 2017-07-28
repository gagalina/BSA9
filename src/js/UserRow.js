import React, {Component}  from 'react';

export default class UserRow extends Component {

    render() {
        let id = this.props.value.id;


        return (
            <li className="list-group-item">
                <div className="userContent">
                    {this.props.value.name}
                    <div>
                        <button onClick={() => this.props.showCurrentUser(id)} className="selectBtn">Select</button>
                        <button type="button" onClick={() => this.props.deleteUser(this.props.value.id)}>Delete</button>
                    </div>
                </div>
            </li>
        )
    }
}

