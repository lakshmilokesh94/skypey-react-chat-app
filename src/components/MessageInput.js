import React from "react";
import store from "../store/index";
import {sendMessage,setUserTyping} from "../actors/index";
import "./MessageInput.css";

const MessageInput = ({value}) =>{
    const state = store.getState();
    const {activeUserId,typing} = state;
    const onInputChange = (e) => {
      store.dispatch(setUserTyping(e.target.value));
    }

    const onSendClickHandler = (e) =>{
        e.preventDefault();
        store.dispatch(sendMessage(typing,activeUserId));
    }


    return (
        <form className="MessageInput">
            <input type="text" 
            className="MessageInput__input" 
            value={value} 
            placeholder="write a message"
            onChange={(e) => onInputChange(e)} />
            <button className="MessageInput__send-button" onClick={(e) => onSendClickHandler(e)}>Send</button>
        </form>
    )
}

export default MessageInput;