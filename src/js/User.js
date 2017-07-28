import React, {Component}  from 'react';

export default class User extends Component {

    render() {
        return(
            <div className="page-header">
                <h2>{this.props.currentUser.name}</h2>
                <h3>{this.props.currentUser.id}</h3>
            </div>
        )
    }
};

