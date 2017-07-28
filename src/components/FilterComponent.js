import React, {Component} from 'react';
import {connect} from 'react-redux';
import {filterUsers} from '../actions/userActions';
import {bindActionCreators} from 'redux';


class FilterComponent extends Component {

    render() {
        return (
            <div>
                <form className="input-group search">
                    <input type="text" placeholder="search..."
                           onChange={(e) => this.props.filterUsers(e.target.value)}
                           value={this.props.query}/>
                </form>
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return{
        query: state.users.query
    }
};


const mapDispatchToProps = (dispatch) => {
    return{
        filterUsers: bindActionCreators(filterUsers, dispatch)
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(FilterComponent);

