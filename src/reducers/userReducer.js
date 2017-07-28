const initialState = {
    users: [],
    currentUser: {},
    name: '',
    id: '',
    query:''
};

export default function userReducer(state = initialState, action) {
    switch (action.type) {

        case 'CREATE_USER': {
            let userArray = state.users.slice();
            userArray.push({name: state.name, id: state.id});

            return Object.assign({}, state, {users: userArray, currentUser: userArray[0], name:'', id:''});
        }

        case 'DELETE_USER': {
            let userArray = state.users.slice();
            let userIndex = null;
            state.users.map((el, index) => {
                (el.id === action.id) ? userIndex = index : null;
            });
            userArray.splice(userIndex, 1);

            let updatedState = {users: userArray};

            if (state.currentUser.id === action.id) {
                updatedState['currentUser'] = userArray.length >= 1 ? userArray[0] : {
                    name: null,
                    id: null
                };
            }

            return Object.assign({}, state, updatedState);
        }

        case 'SHOW_CURRENT_USER': {
            let currentUser = state.users.find((el) => {
                return (el.id === action.id)
            });
            return Object.assign({}, state, {currentUser: currentUser});
        }

        case 'UPDATE_FIELD': {
            let newState = {};
            newState[action.data.field] = action.data.value;
            return Object.assign({}, state, newState);
        }

        case 'FILTER_USERS': {
            return Object.assign({}, state, {query:action.query});
        }

        default:
            return state;
    }
}



