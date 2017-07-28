import React, {Component} from 'react';
import {connect} from 'react-redux';
import {updateField, createUser} from '../actions/userActions';
import {bindActionCreators} from 'redux';


class NewUserField extends Component {


    handleSubmit(e) {
        e.preventDefault();
        this.props.createUser();

    };

    render() {

        return (
            <div className="newUserField">

                <form onSubmit={(e) => this.handleSubmit(e)} className="input-group">
                    <input type="text" placeholder="Username"
                           onChange={(e) => this.props.updateField({value: e.target.value, field: 'name'})} value={this.props.name} />
                    <input type="number" placeholder="User ID"
                           onChange={(e) => this.props.updateField({value: e.target.value, field: 'id'})} value={this.props.id}/>
                    <button type="submit">Add</button>
                </form>
            </div>


        )
    }
}

const mapStateToProps = (state) => {
    return{
        name:state.users.name,
        id:state.users.id
    }
};


const mapDispatchToProps = (dispatch) => {
    return{
        updateField: bindActionCreators(updateField, dispatch),
        createUser: bindActionCreators(createUser, dispatch)
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(NewUserField);
