import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from 'lib/state/employee.reducer';
import { EmployeeAddAction } from 'lib/state/exployee.action';
import { IEmployee } from '../../lib/state/employee.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
@Ready
export class AppComponent{
 constructor(er){
   console.log('success');
 }
}
export class rt {
  title = 'app';
  treat;
  constructor(public store:Store<AppState>){
   let ir:IEmployee={
    id:1,
    name:"forever",
    position:"chennai"
   };
   this.treat=store.pipe(select('employee'));
    store.dispatch(new EmployeeAddAction(ir))
    
  }
  yet(){
    return true;
  }
 
 
}

export function Ready(target){
 console.log(target); 
 }
