import { ActionType } from "../action-types/index"

interface DepositAction {
    type: ActionType.DEPOSIT,
    payload: any
}

interface WithdrawAction {
    type: ActionType.WITHDRAW,
    payload: any
}
interface UserserviceAction {
    type:ActionType.USERSERVICE,
    payload:any
}

interface CategoryAction {
    type:ActionType.CATEGORY,
    payload: any
}
interface BankruptAction {
    type: ActionType.BANKRUPT
}
interface ServiceAction {
    type: ActionType.SERVICEVIAID,
    payload: any
}
interface UserAction {
    type: ActionType.USER
}
interface MainServiceAction {
    type: ActionType.SERVICE,
    payload: any
}
interface FavoriteAction {
    type:ActionType.FAVORITE,
    payload:any
}
interface AllserviceAction {
    type:ActionType.ALLSERVICE,
    payload:any
}
interface RecommendedAction {
    type:ActionType.RECOMMENDED,
    payload:any
}
interface ViewedAction {
    type:ActionType.VIEWED,
    payload:any
}
export type Action = DepositAction | WithdrawAction | BankruptAction | UserAction | CategoryAction | ServiceAction | MainServiceAction | FavoriteAction | UserserviceAction | AllserviceAction | RecommendedAction | ViewedAction