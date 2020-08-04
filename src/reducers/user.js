import { generateUser } from "../static-data";
 
 
 const reducer = (state=generateUser(),action) => {
    return state;
}

export default reducer;
