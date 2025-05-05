import { createFeatureSelector, createSelector } from '@ngrx/store';
import { employeeFeatureKey, EmployeeState } from '../reducer/employee.reducer';

export const featureSelector = createFeatureSelector<EmployeeState>(employeeFeatureKey);

export const EmployeeSelector = createSelector(
  featureSelector,
  (state:EmployeeState) => state.employees
)