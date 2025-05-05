import { HomeComponent } from './component/home/home.component';
import { Routes } from '@angular/router';
import { PlayGroundComponent } from './component/play-ground/play-ground.component';
import { CurrencyConverterComponent } from './component/currency-converter/currency-converter.component';
import { ChildComponent } from './component/child/child.component';
import { EmployeeComponent } from './component/employee/employee.component';
import { CustomerComponent } from './component/customer-ngrx/customer.component';
import { CounterComponent } from './component/counter-ngrx/counter.component';
import { EmployeeNgrxComponent } from './component/employee-ngrx/employee-ngrx.component';
import { AddEmployeeComponent } from './component/employee/add-employee/add-employee.component';
import { GetEmployeeComponent } from './component/employee/get-employee/get-employee.component';
import { UpdateEmployeeComponent } from './component/employee/update-employee/update-employee.component';
import { DeleteEmployeeComponent } from './component/employee/delete-employee/delete-employee.component';
import { AddEmployeeNgrxComponent } from './component/employee-ngrx/add-employee-ngrx/add-employee-ngrx.component';
import { GetEmployeeNgrxComponent } from './component/employee-ngrx/get-employee-ngrx/get-employee-ngrx.component';
import { UpdateEmployeeNgrxComponent } from './component/employee-ngrx/update-employee-ngrx/update-employee-ngrx.component';
import { DeleteEmployeeNgrxComponent } from './component/employee-ngrx/delete-employee-ngrx/delete-employee-ngrx.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'playground', component: PlayGroundComponent },
  { path: 'currency-converter', component: CurrencyConverterComponent },
  { path: 'child/:id', component: ChildComponent },
  {
    path: 'employee',
    component: EmployeeComponent,
  },
  {
    path: 'customer',
    component: CustomerComponent,
  },
  {
    path: 'counter-ngrx',
    component: CounterComponent,
  },
  {
    path: 'employee-ngrx',
    component: EmployeeNgrxComponent,
    children: [
      {
        path: 'add-employee',
        component: AddEmployeeNgrxComponent,
      },
      {
        path: 'get-employee',
        component: GetEmployeeNgrxComponent,
      },
      {
        path: 'update-employee',
        component: UpdateEmployeeNgrxComponent,
      },
      {
        path: 'delete-employee',
        component: DeleteEmployeeNgrxComponent,
      },
    ],
  },
];
