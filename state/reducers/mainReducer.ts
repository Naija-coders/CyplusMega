import { ActionType } from "../action-types/index"
import { Action } from "../actions"
import Clientapi from "../../pages/api/client";

let categoryres;
let servicedata = Clientapi.get("/api/company/services").then((response) => {
  categoryres = response.data;
  console.log("checking userservice response", categoryres);
});
const initialState = {
    user: [],
    isLoggedIn: false,
    categories: [],
    isCategories: false,
    services: [],
    mainservices : [],
    userfavorite : [],
    userservices: !!servicedata,
    servicedata: [],
    allservicedata: [],
    recommended:[],
    viewed: '',
    

    
}

const reducer = (state: any = initialState, action: Action): any => {
    switch (action.type){
        case ActionType.DEPOSIT:
           
            return  {
                ...state,
                isLoggedIn: true,
                user:action.payload
            }
            case ActionType.CATEGORY: 
            return {
                ...state,
                isCategories: false,
                categories: action.payload

            }
            case ActionType.SERVICEVIAID:
                return {
                    ...state,
                services: action.payload
                }
                
            case ActionType.FAVORITE:
                return {
                    ...state,
                    userfavorite : action.payload
                }
            case ActionType.SERVICE:
                return {
                    ...state,
                    mainservices: action.payload
                }
            case ActionType.USERSERVICE:
                return {
                    ...state,
                    servicedata: action.payload
                }
            case ActionType.ALLSERVICE:
                return {
                    ...state,
                    allservicedata: action.payload
                }
                case ActionType.RECOMMENDED:
                    return{
                        ...state,
                        recommended:action.payload
                        
                    }
            case ActionType.VIEWED:
                return{
                    ...state,
                    viewed:action.payload
                }

        
        default:
            return state
    }
}

export default reducer