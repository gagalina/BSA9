import React, {Component} from 'react';
import UserRow from './UserRow';
import 'bootstrap/dist/css/bootstrap.css';
import {connect} from 'react-redux';
import {deleteUser, showCurrentUser} from '../actions/userActions';
import {bindActionCreators} from 'redux';


class UserList extends Component {


    render() {

        let listItems = this.props.users.filter((el) => {
            return el.name.includes(this.props.query);
        });


        return (
            <div>
                <ul className="list-group">
                    {listItems.map((el, index) => {
                        return <UserRow key={index} value={el} deleteUser={this.props.deleteUser}
                                        showCurrentUser={this.props.showCurrentUser}/>
                    })}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.users.users,
        query: state.users.query
    }
};


const mapDispatchToProps = (dispatch) => {
    return {
        deleteUser: bindActionCreators(deleteUser, dispatch),
        showCurrentUser: bindActionCreators(showCurrentUser, dispatch)
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(UserList);