export default (state = null, action) => {
    switch (action.type) {
        case 'SET_ACTIVE_USER':
            console.log(action.payload);
            return action.payload;
        default:
            return state;
    }
}