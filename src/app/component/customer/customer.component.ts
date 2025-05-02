import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../../models/customer';
import { Store, select } from '@ngrx/store';
import { CustomerSelector } from '../../customer/store/selector/customer.selectors';
import { CommonModule } from '@angular/common';

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

}
