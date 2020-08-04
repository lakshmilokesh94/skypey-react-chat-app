import React from "react";
import "./Empty.css";

const Empty = ({ user }) => {
    const { name, profile_pic, status } = user
    const shortName = name.split(" ")[0];
    return (
        <div className="Empty">
            <p className="Empty__name">Welcome,{shortName}</p>
            <img src={profile_pic} alt="pic" className="Empty__img" />
            <p className="Empty__status">Status:{status}</p>
            <button className="Empty__btn">
                Start Conversation
             </button>
            <p className="Empty__info">
                Search for someone to start chatting with or go to Contacts
                to see who
                is available
            </p>
        </div>
    )
}

export default Empty;