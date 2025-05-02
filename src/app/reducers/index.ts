import { isDevMode } from '@angular/core';
import {
 createReducer,
 MetaReducer,
 on,
} from '@ngrx/store';
import { Customer } from '../models/customer';
import { AddCustomer } from '../customer/store/action/customer.action';


export const customerFeatureKey = "customer";

export interface CustomerState{
 customers: Customer[]
}

export const initialState: CustomerState = {
 customers:[] = []
}

export const customerReducer = createReducer(
 initialState,
 on(AddCustomer,(state:CustomerState, {customer})=>(
 {
 ...state,
 customers: [...state.customers,customer]
 }
 )),
)


export const metaReducers: MetaReducer<CustomerState>[] = isDevMode() ? [] : [];