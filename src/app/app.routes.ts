import { HomeComponent } from './component/home/home.component';
import { Routes } from '@angular/router';
import { PlayGroundComponent } from './component/play-ground/play-ground.component';
import { CurrencyConverterComponent } from './component/currency-converter/currency-converter.component';
import { ChildComponent } from './component/child/child.component';
import { EmployeeComponent } from './component/employee/employee.component';
import { CustomerComponent } from './component/customer/customer.component';

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
    component: CustomerComponent
  }
];
