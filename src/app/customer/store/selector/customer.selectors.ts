import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CustomerState, customerFeatureKey } from '../reducer/customer.reducer';

export const selectCustomerState = createFeatureSelector<CustomerState>(customerFeatureKey);

export const CustomerSelector = createSelector(
    selectCustomerState,
    (state:CustomerState)=>state.customers
)