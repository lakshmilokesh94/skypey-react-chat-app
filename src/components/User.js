import React from 'react';
import "./User.css";
import store from "../store/index";
import {setActiveUser,removeUser} from "../actors/index";

const User = ({user}) => {

    const {name,profile_pic,status} = user;
    
    const onUserClickHandler = ({user_id})=>{
        console.log(user_id);
        store.dispatch(setActiveUser(user_id));
    }

const onUserRemoveHandler = (e,user_id) =>{
    e.stopPropagation();
    store.dispatch(removeUser(user_id));
    store.dispatch(setActiveUser(null));

}

    return (
        <div className="User" onClick={onUserClickHandler.bind(null,user)}>
            <img src={profile_pic} alt="pic" className="User__pic" />
            <div className="User__details">
                <div className="User__details-name">
                  <p>{name}</p>
                 
                </div>
                <div className="User__details-status">
                 {status}
                </div>
            </div>
            <button className="User__remove-button" onClick={(e) => onUserRemoveHandler(e,user.user_id)}>X</button>
        </div>
    )
 

}

export default User;