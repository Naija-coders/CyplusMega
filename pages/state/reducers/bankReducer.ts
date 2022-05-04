import categories from "../../categories";
import { ActionType } from "../action-types/index"
import { Action } from "../actions"


const initialState = {
    user: [],
    isLoggedIn: false,
    categories: [],
    isCategories: false,
    services: [],

    
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
        
        default:
            return state
    }
}

export default reducer