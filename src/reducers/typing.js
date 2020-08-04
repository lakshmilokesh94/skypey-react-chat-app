export default (state = "", action) => {
    if (action.type === "SET_TYPING") {
        return action.message;
    } else if(action.type === "SEND_MESSAGE"){
       return "";
    } else {
        return state;
    }
}

