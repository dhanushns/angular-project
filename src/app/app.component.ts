import { Component } from '@angular/core';
import { PlayGroundComponent } from "./component/play-ground/play-ground.component";
import { CommonModule } from '@angular/common';
import { ChildComponent } from "./component/child/child.component";
import { RouterLink, RouterOutlet } from '@angular/router';
import { AddEmployeeComponent } from "./component/employee/add-employee/add-employee.component";
import { CustomerComponent } from './component/customer-ngrx/customer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [CommonModule, RouterOutlet, RouterLink],
})
export class AppComponent {

}
