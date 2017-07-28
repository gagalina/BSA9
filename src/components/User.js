import React, {Component}  from 'react';
import {connect} from 'react-redux';

class User extends Component {

    render() {
        return(
            <div className="page-header">
                <h2>{this.props.currentUser.name}</h2>
                <h3>{this.props.currentUser.id}</h3>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        currentUser: state.users.currentUser
    }
};


export default connect(mapStateToProps)(User);




