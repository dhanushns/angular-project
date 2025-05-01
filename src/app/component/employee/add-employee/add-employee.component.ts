import { Component, OnInit, ViewChild, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { EmployeeService } from '../../../service/employee.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmployeeComponent } from '../employee.component';

@Component({
  selector: 'app-add-employee',
  imports: [CommonModule,HttpClientModule, FormsModule],
  templateUrl: './add-employee.component.html',
  styleUrl: '../employee.css',
  providers: [EmployeeService]
})
export class AddEmployeeComponent implements OnInit {

  constructor(private service: EmployeeService) {}
  
  ngOnInit(){}

  isAdded: boolean = false;

  @Output() employeeList = new EventEmitter<any[]>();

  addEmployee(newEmployee: any){
    this.service.addEmployee(newEmployee).subscribe(res=>{
      this.service.getAllEmployee().subscribe(res=>{
        this.isAdded = true;
        setTimeout(()=>{
          this.isAdded = false;
        },5000);
        this.employeeList.emit(res);
      });
    })
  }

  close(){
    this.isAdded = false;
  }

}
