import { contacts } from "../static-data";
 
 
 const reducer = (state=contacts,action) => {
    switch(action.type){
        case 'REMOVE_USER':
            const contactId = action.payload;
            const { [contactId]: deleted,...newState } = state;
            return newState;
        
        default:
            return state;
    } 
}

export default reducer;
