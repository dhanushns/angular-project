import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Employee } from '../../models/employee/employee';

export const GetAllEmployeeActions = createActionGroup({
  source: 'Employee',
  events: {
    'Load All Employees': emptyProps(),
    'Load Employees Success': props<{ employees: Employee[] }>(),
    'Load Employees Failure': props<{ error: string }>(),
  }
})

export const GetEmployeeActions = createActionGroup({
  source: 'Employee',
  events:{
    'Load Employee': props<{empId:string}>(),
    'Load Employee Success' : props<{employee : Employee}>(),
    'Load Employee Failure' : props<{error : string}>()
  }
})

export const UpdateEmployeeActions = createActionGroup({
  source:'Employee',
  events:{
    'Update Employee': props<{empId:string, employee:Employee}>(),
    'Update Employee Success' : props<{employee: Employee}>(),
    'Update Employee Failure': props<{error:string}>()
  }
})

export const AddEmployeeActions = createActionGroup({
  source:'Employee',
  events:{
    'Add Employee': props<{employee:Employee}>(),
    'Add Employee Success' : props<{employee:Employee}>(),
    'Add Employee Failure': props<{error:string}>()
  }
})

export const DeleteEmployeeActions = createActionGroup({
  source:'Employee',
  events:{
    'Delete Employee' : props<{empId:string}>(),
    'Delete Employee Success' : props<{employee:Employee}>(),
    'Delete Employee Failure' : props<{error:string}>()
  }
})
