import { ActionReducer, ActionReducerMap } from "@ngrx/store";
import { EmployeeAction } from './exployee.action';
import { IEmployee } from './employee.state';

export function EmployeeReducer(state:IEmployee,action:EmployeeAction):IEmployee{
    switch(action.type)
    {
        
        default :
        debugger;
            return state={
                id:0,
                position:"1",
                name:"2"
            };
    }
}
export interface AppState{
    employee:IEmployee
}
export const reducer:ActionReducerMap<AppState>={
    employee:EmployeeReducer
};