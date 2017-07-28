function createUser(user) {
    return {type: 'CREATE_USER', user}
}

function deleteUser(id) {
    return {type: 'DELETE_USER', id}
}

function showCurrentUser(id) {
    return {type: 'SHOW_CURRENT_USER', id}
}

function updateField(data) {
    return {type: 'UPDATE_FIELD', data}
}

function filterUsers (query) {
    return {type: 'FILTER_USERS', query}
}

export {createUser, deleteUser, showCurrentUser, updateField, filterUsers};