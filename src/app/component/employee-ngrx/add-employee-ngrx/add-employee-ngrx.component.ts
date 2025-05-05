import { Component, inject } from '@angular/core';
import { Employee } from '../../../models/employee/employee';
import { EmployeeState } from '../../../employee/reducer/employee.reducer';
import { Store } from '@ngrx/store';
import { EmployeeService } from '../../../service/employee.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import * as EmployeeActions from '../../../employee/action/employee.actions'

@Component({
  selector: 'app-add-employee-ngrx',
  imports: [CommonModule,FormsModule],
  templateUrl: './add-employee-ngrx.component.html',
  styleUrl: '../../employee/employee.css'
})
export class AddEmployeeNgrxComponent {

  private store = inject<Store<{employee:EmployeeState}>>(Store);
  private service = inject(EmployeeService);

  isAdded:boolean = false;

  employee$ : Observable<Employee> = this.store.select(state=>state.employee.employee);
  
  employee : Employee = {
    id:'',
    name: '',
    age: 0,
    department: '',
    salary : 0
  }

  addEmployee(employee : Employee){
    this.store.dispatch(EmployeeActions.AddEmployeeActions.addEmployee({employee:employee}))
    this.employee$.subscribe(res=>{
      this.isAdded = true;
      setTimeout(()=>{
        this.isAdded = false
      },5000)
    }
    );
  }

  close(){
    this.isAdded = false;
  }

}
