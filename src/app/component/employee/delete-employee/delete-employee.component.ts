import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from '../../../service/employee.service';

@Component({
  selector: 'app-delete-employee',
  imports: [CommonModule,FormsModule],
  templateUrl: './delete-employee.component.html',
  styleUrl: '../employee.css'
})
export class DeleteEmployeeComponent {

  empId:any;

  showEmployee: boolean = false;
  employee: any;

  constructor(private service: EmployeeService){}

  @Output() deletedList = new EventEmitter();

  deleteEmployee(){
    this.service.deleteEmployee(this.empId).subscribe(res=>{
      this.employee = res;
      this.service.getAllEmployee().subscribe(res=>{
        this.showEmployee = true;
        setTimeout(()=>{
          this.showEmployee = false;
        },5000);
        this.deletedList.emit(res);
      })
    })
  }

}
