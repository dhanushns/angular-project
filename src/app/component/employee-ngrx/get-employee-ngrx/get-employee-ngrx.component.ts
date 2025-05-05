import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmployeeState } from '../../../employee/reducer/employee.reducer';
import { Store } from '@ngrx/store';
import { EmployeeService } from '../../../service/employee.service';
import { Employee } from '../../../models/employee/employee';
import { Observable } from 'rxjs';
import * as EmployeeActions from '../../../employee/action/employee.actions'
import { GetEmployeeActions } from '../../../employee/action/employee.actions';

@Component({
  selector: 'app-get-employee-ngrx',
  imports: [CommonModule, FormsModule],
  templateUrl: './get-employee-ngrx.component.html',
  styleUrl: '../../employee/employee.css'
})
export class GetEmployeeNgrxComponent {

  private store = inject<Store<{employee:EmployeeState}>>(Store);
  private service = inject(EmployeeService)

  employee$ : Observable<Employee> = this.store.select(state=>state.employee.employee);

  showEmployee:boolean = false;

  fetchEmployee(id:string){
    this.store.dispatch(EmployeeActions.GetEmployeeActions.loadEmployee({empId : id}))
    this.showEmployee = true;
  }

}
