import { Component, EventEmitter, Output } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { EmployeeService } from '../../../service/employee.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-employee',
  imports: [HttpClientModule,CommonModule,FormsModule],
  templateUrl: './update-employee.component.html',
  styleUrl: '../employee.css',
  providers: [EmployeeService]
})
export class UpdateEmployeeComponent {

  constructor(private service: EmployeeService){}

  @Output() updatedList = new EventEmitter();

  isUpdated: boolean = false;
  showEmployee: boolean = false;
  empId: any;

  employee:any;

  updateEmployee(employee : any){
    this.service.updateEmployee(this.empId,employee).subscribe(res=>{
      this.service.getAllEmployee().subscribe(res=>{
        this.isUpdated = true;
        setTimeout(()=>{
          this.isUpdated = false;
        },5000)
        this.updatedList.emit(res);
      })
    })
  }

  fetchEmployee(){
    this.service.getEmployee(this.empId).subscribe(res=>{
      this.employee = res;
      this.showEmployee = true;
    })
  }

  close(){
    this.isUpdated = false;
  }

}
