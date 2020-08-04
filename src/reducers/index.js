import user from "./user";
import contacts from "./contacts";
import activeUserId from "./activeUser";
import { combineReducers } from "redux";
import messages from "./messages";
import typing from "./typing";

export default combineReducers({
    user,
    contacts,
    messages,
    activeUserId,
    typing
})
