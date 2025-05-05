import { createReducer, emptyProps, on } from '@ngrx/store';
import { Employee } from '../../models/employee/employee';
import * as EmployeeActions from '../action/employee.actions'

export const employeeFeatureKey = 'employee';

export interface EmployeeState {
  employees: Employee[],
  employee: Employee
  error: string | null
}

export const initialState: EmployeeState = {
  employees : [],
  employee: new Employee(),
  error: null
};

export const EmployeeReducer = createReducer(
  initialState,
  on(EmployeeActions.GetAllEmployeeActions.loadEmployeesSuccess,(state:EmployeeState, {employees})=>({
    ...state,
    employees,
    error:null
  })),
  on(EmployeeActions.GetEmployeeActions.loadEmployeeSuccess,(state:EmployeeState,{employee})=>({
    ...state,
    employee,
    error:null
  })),
  on(EmployeeActions.UpdateEmployeeActions.updateEmployeeSuccess,(state:EmployeeState, {employee})=>({
    ...state,
    employees : state.employees.map(emp=>
      emp.id === employee.id ? employee : emp
    )
  })),
  on(EmployeeActions.AddEmployeeActions.addEmployeeSuccess,(state:EmployeeState,{employee})=>({
    ...state,
    employees : [...state.employees,employee]
  })),
  on(EmployeeActions.DeleteEmployeeActions.deleteEmployeeSuccess,(state:EmployeeState,{employee})=>({
    ...state,
    employees : state.employees.filter(emp=>emp.id != employee.id),
    employee:employee
  }))
);

