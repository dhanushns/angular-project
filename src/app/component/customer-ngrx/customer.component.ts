import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../../models/customer/customer';
import { Store, select } from '@ngrx/store';
import { CustomerSelector } from '../../customer/store/selector/customer.selectors';
import { CommonModule } from '@angular/common';
import { AddCustomer } from '../../customer/store/action/customer.action';

@Component({
  selector: 'app-customer',
  imports: [CommonModule],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent {

  customers$ !: Observable<Customer[]>

  constructor(private store: Store){
    this.customers$ = this.store.pipe(select(CustomerSelector))
  }

  addCustomer(newCustomer: string){
    const customers = new Customer();
    customers.name = newCustomer;
    this.store.dispatch(AddCustomer(customers));
  }

}
