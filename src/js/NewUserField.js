import React, {Component}  from 'react';

export default class NewUserField extends Component {
    handleSubmit(e) {
        e.preventDefault();

        let newUserName = this.refs.nameInput.value;
        let newUserId = this.refs.idInput.value;

        let newUserData = {
            name: newUserName,
            id: newUserId
        };

        this.props.addNewUser(newUserData);
    };


    render() {

        return (
            <div className="newUserField">

                <form onSubmit={(e) => this.handleSubmit(e)} className="input-group">
                    <input type="text" placeholder="Username" id="nameInput" ref="nameInput"/>
                    <input type="number" placeholder="User ID" id="idInput" ref="idInput"/>
                    <button type="submit">Add</button>
                </form>
            </div>

        )
    }
}

