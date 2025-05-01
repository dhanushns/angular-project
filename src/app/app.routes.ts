import { HomeComponent } from './component/home/home.component';
import { Routes } from '@angular/router';
import { PlayGroundComponent } from './component/play-ground/play-ground.component';
import { CurrencyConverterComponent } from './component/currency-converter/currency-converter.component';
import { ChildComponent } from './component/child/child.component';
import { EmployeeComponent } from './component/employee/employee.component';
import { AddEmployeeComponent } from './component/employee/add-employee/add-employee.component';
import { GetEmployeeComponent } from './component/employee/get-employee/get-employee.component';
import { UpdateEmployeeComponent } from './component/employee/update-employee/update-employee.component';
import { DeleteEmployeeComponent } from './component/employee/delete-employee/delete-employee.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'playground', component: PlayGroundComponent },
  { path: 'currency-converter', component: CurrencyConverterComponent },
  { path: 'child/:id', component: ChildComponent },
  {
    path: 'employee',
    component: EmployeeComponent,
    children: [
      { path: 'add-employee', component: AddEmployeeComponent },
      { path: 'get-employee', component: GetEmployeeComponent },
      { path: 'update-employee', component: UpdateEmployeeComponent },
      { path: 'delete-employee', component: DeleteEmployeeComponent },
    ],
  },
];
