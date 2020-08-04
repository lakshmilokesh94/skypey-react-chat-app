import React, { Component } from "react";
import "./Chats.css";
import store from "../store/index";

const Chat = ({ message }) => {
    const { activeUserId } = store.getState();
    const { text, is_user_msg } = message;

    const onRemoveMessage = (e) => {
        e.stopPropagation();
        store.dispatch({ type: 'REMOVE_MESSAGE', message, activeUserId })

    }
    return is_user_msg ? (
        <div className="Chat is_user_msg">
            <span className="Chat__Remove-icon" onClick={(e) => onRemoveMessage(e)}>x</span>
            <span >{text}</span></div>)
        : (<span className="Chat">{text}</span>)

}

class Chats extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { messages } = this.props;
        return (
            <div className="Chats">
                {
                    messages.map((message) => (
                        <Chat message={message} key={message.number} />))
                }
            </div>
        )
    }
}

export default Chats;