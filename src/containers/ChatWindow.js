import React from "react";
import store from "../store/index";
import Header from "../components/Header";
import Chats from "../components/Chats";
import _ from "lodash";
import "./ChatWindow.css";
import MessageInput from "../components/MessageInput";

const ChatWindow = ({activeUserId})=>{
const state = store.getState();
const activeUser = state.contacts[activeUserId];
const activeMessages = state.messages[activeUserId];
const typing = state.typing;

 return (
    <div className="ChatWindow">
      <Header user={activeUser} />
      <Chats messages={_.values(activeMessages)} />
     <MessageInput value={typing} activeUserId= {activeUserId}/> 
    </div>
    );
}

export default ChatWindow;