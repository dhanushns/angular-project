import { createReducer, on } from '@ngrx/store';
import * as CustomerActions from '../action/customer.action';
import { Customer } from '../../../models/customer/customer';

export const customerFeatureKey = 'customer';

export interface CustomerState {
  customers: Customer[]
}

export const initialState: CustomerState = {
  customers: []
};

export const CustomerReducer = createReducer(
  initialState,
  on(CustomerActions.AddCustomer, (state : CustomerState, {customer} )=>({
    ...state,
    customers: [...state.customers,customer]
  }))
);

