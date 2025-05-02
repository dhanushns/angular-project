import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CustomerState, customerFeatureKey } from '../../../reducers';

export const selectCustomerState = createFeatureSelector<CustomerState>(customerFeatureKey);

export const CustomerSelector = createSelector(
    selectCustomerState,
    (state:CustomerState)=>state.customers
)