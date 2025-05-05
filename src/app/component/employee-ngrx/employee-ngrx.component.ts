import { Employee } from './../../models/employee/employee';
import { Component, inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { EmployeeService } from '../../service/employee.service';
import { EmployeeState } from '../../employee/reducer/employee.reducer';
import { CommonModule } from '@angular/common';
import * as EmployeeActions from '../../employee/action/employee.actions'
import { HttpClientModule } from '@angular/common/http';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-employee-ngrx',
  imports: [CommonModule,HttpClientModule,RouterLink,RouterOutlet],
  templateUrl: './employee-ngrx.component.html',
  styleUrl: './employee-ngrx.component.css',
  providers: [EmployeeService]
})
export class EmployeeNgrxComponent implements OnInit{

  private store = inject<Store<{employee:EmployeeState}>>(Store);
  private service = inject(EmployeeService);

  tabId = '1'

  employees$ : Observable<Employee[]> = this.store.select(state=>state.employee.employees);

  ngOnInit(){
    this.store.dispatch(EmployeeActions.GetAllEmployeeActions.loadAllEmployees())
  }

  handleTabs(id:string){
    this.tabId = id;
  }

}
