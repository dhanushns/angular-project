import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeState } from '../../../employee/reducer/employee.reducer';
import { Store } from '@ngrx/store';
import { EmployeeService } from '../../../service/employee.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import * as EmployeeActions from '../../../employee/action/employee.actions'
import { Employee } from '../../../models/employee/employee';

@Component({
  selector: 'app-delete-employee-ngrx',
  imports: [CommonModule,FormsModule],
  templateUrl: './delete-employee-ngrx.component.html',
  styleUrl: '../../employee/employee.css'
})
export class DeleteEmployeeNgrxComponent {

  private store = inject<Store<{employee:EmployeeState}>>(Store);

  isDeleted:boolean = false;

  employee$ : Observable<Employee> = this.store.select(state=>state.employee.employee);

  deleteEmployee(id:string){
    this.store.dispatch(EmployeeActions.DeleteEmployeeActions.deleteEmployee({empId:id}))
    this.isDeleted = true;
  }

}
