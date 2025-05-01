import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import {  Component, OnInit, } from '@angular/core';
import { EmployeeService } from '../../service/employee.service';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { UpdateEmployeeComponent } from "./update-employee/update-employee.component";
import { GetEmployeeComponent } from "./get-employee/get-employee.component";
import { DeleteEmployeeComponent } from "./delete-employee/delete-employee.component";

@Component({
  selector: 'app-employee',
  imports: [
    CommonModule,
    HttpClientModule,
    AddEmployeeComponent,
    UpdateEmployeeComponent,
    GetEmployeeComponent,
    DeleteEmployeeComponent
],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css',
  providers: [EmployeeService],
})
export class EmployeeComponent implements OnInit {

  employees: any[] = [];

  tabId:string = '1';

  constructor(private service: EmployeeService) {}

  ngOnInit() {
    this.service.getAllEmployee().subscribe((res) => {
      this.employees = res;
    });
  }

  handleTabs(id:string){
    this.tabId = id;
  }

  handleEmployeeList(list: any){
    this.employees = list;
  }
}
