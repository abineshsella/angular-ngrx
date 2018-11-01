import { Action } from "@ngrx/store";
export enum EmployeeTypes{
    addEmployee="[Employee add]"
}
export class EmployeeAddAction implements Action{
readonly type=EmployeeTypes.addEmployee;
constructor(public payload){}
}
export type EmployeeAction=EmployeeAddAction;