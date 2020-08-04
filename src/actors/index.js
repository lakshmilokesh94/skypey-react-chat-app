export const setActiveUser = (userId)=>{
    return {
        type:'SET_ACTIVE_USER',
        payload:userId
    }
}

export const removeUser = (userId) =>{
    return {
        type:'REMOVE_USER',
        payload:userId
    }
};


export const sendMessage = (message,activeUserId) =>{
    return {
        type:'SEND_MESSAGE',
        message,
        activeUserId
    }
};

export const setUserTyping = (message) =>{
    return {
        type:'SET_TYPING',
        message
    }
}