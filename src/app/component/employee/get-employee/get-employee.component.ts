import { Component, EventEmitter, Output } from '@angular/core';
import { EmployeeService } from '../../../service/employee.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-get-employee',
  imports: [CommonModule,FormsModule],
  templateUrl: './get-employee.component.html',
  styleUrl: '../employee.css',
})
export class GetEmployeeComponent {
  constructor(private service: EmployeeService) {}

  @Output() updatedList = new EventEmitter();

  isUpdated: boolean = false;
  showEmployee: boolean = false;
  empId: any;

  employee: any;

  fetchEmployee() {
    this.service.getEmployee(this.empId).subscribe((res) => {
      this.employee = res;
      this.showEmployee = true;
    });
  }

  close() {
    this.isUpdated = false;
  }
}
