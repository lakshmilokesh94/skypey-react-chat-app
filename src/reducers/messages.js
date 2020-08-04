import { getMessages } from "../static-data";
import _ from 'lodash';

export default (state = getMessages(10), action) => {
    if (action.type === "SEND_MESSAGE") {
        const {message,activeUserId} = action;
        const allUserMsgs = state[activeUserId];
        const number = +_.keys(allUserMsgs).pop() + 1;
        return {
            ...state,
            [activeUserId]: {
              ...allUserMsgs,
              [number]: {
                number,
                text: message,
                is_user_msg: true
              }
      
            }
        } 
    } else if(action.type === "REMOVE_MESSAGE"){
        const {message,activeUserId} = action;
        const allUserMsgs = state[activeUserId];
        const {[message.number] :deleted, ...newMessages} = allUserMsgs;
        return {
            ...state,
            [activeUserId]: newMessages
        } 
    } else {
        return state;
    }

}