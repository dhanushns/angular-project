import { Component } from '@angular/core';
import { PlayGroundComponent } from "./component/play-ground/play-ground.component";
import { CommonModule } from '@angular/common';
import { ChildComponent } from "./component/child/child.component";
import { RouterLink, RouterOutlet } from '@angular/router';
import { AddEmployeeComponent } from "./component/employee/add-employee/add-employee.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [PlayGroundComponent, CommonModule, RouterOutlet, RouterLink, AddEmployeeComponent],
})
export class AppComponent {

}
