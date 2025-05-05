import { Component, inject } from '@angular/core';
import { EmployeeState } from '../../../employee/reducer/employee.reducer';
import { Store } from '@ngrx/store';
import { EmployeeService } from '../../../service/employee.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Employee } from '../../../models/employee/employee';
import { Observable } from 'rxjs';
import * as EmployeeActions from '../../../employee/action/employee.actions'

@Component({
  selector: 'app-update-employee-ngrx',
  imports: [CommonModule,FormsModule],
  templateUrl: './update-employee-ngrx.component.html',
  styleUrl: '../../employee/employee.css'
})
export class UpdateEmployeeNgrxComponent {

  private store = inject<Store< {employee : EmployeeState}>>(Store);
  private service = inject(EmployeeService);

  employee$ :Observable<Employee> = this.store.select(state=>state.employee.employee);

  employee : Employee ={
    id:'',
    name:'',
    age:0,
    department:'',
    salary:0
  }

  isUpdated: boolean = false;
  showEmployee: boolean = false;

  updateEmployee(){
    this.store.dispatch(EmployeeActions.UpdateEmployeeActions.updateEmployee({empId : this.employee.id,employee : this.employee}));
    this.isUpdated = true;
    setTimeout(()=>{
      this.isUpdated = false
    },5000);
    this.showEmployee = false;
  }

  fetchEmployee(id:string){
    this.store.dispatch(EmployeeActions.GetEmployeeActions.loadEmployee({empId:id}))
    this.showEmployee = true;
    this.employee$.subscribe(res=>
      this.employee = {...res}
    )
  }

  close(){
    this.isUpdated = false;
  }

}
