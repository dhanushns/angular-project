import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EmployeeService } from '../../service/employee.service';
import * as EmployeeActions from '../action/employee.actions'
import { catchError, exhaustMap, map, mergeMap, of, switchMap, tap } from 'rxjs';
import { Employee } from '../../models/employee/employee';

@Injectable()
export class EmployeeEffects {

  private actions$ = inject(Actions);
  private service = inject(EmployeeService);

  loadAllEmployees$ = createEffect(()=>{
    return this.actions$.pipe(
      ofType(EmployeeActions.GetAllEmployeeActions.loadAllEmployees),
      exhaustMap(()=> this.service.getAllEmployee().pipe(
        map((employees) => EmployeeActions.GetAllEmployeeActions.loadEmployeesSuccess({employees})),
        catchError((error)=> of(EmployeeActions.GetAllEmployeeActions.loadEmployeesFailure({error})))
      ))
    )
  })

  getEmployee$ = createEffect(()=>{
    return this.actions$.pipe(
      ofType(EmployeeActions.GetEmployeeActions.loadEmployee),
      switchMap((employee)=> this.service.getEmployee(employee.empId).pipe(
        map((employee)=> EmployeeActions.GetEmployeeActions.loadEmployeeSuccess({employee})),
        catchError((error)=> of(EmployeeActions.GetEmployeeActions.loadEmployeeFailure({error})))
      ))
    )
  });

  updateEmployee$ = createEffect(()=>{
    return this.actions$.pipe(
      ofType(EmployeeActions.UpdateEmployeeActions.updateEmployee),
      mergeMap(({empId,employee}) => this.service.updateEmployee(empId, employee).pipe(
      map((employee)=>EmployeeActions.UpdateEmployeeActions.updateEmployeeSuccess({employee})),
      catchError((error)=>of(EmployeeActions.UpdateEmployeeActions.updateEmployeeFailure({error})))
    ))
    )
  })

  addEmployee$ = createEffect(()=>{
    return this.actions$.pipe(
      ofType(EmployeeActions.AddEmployeeActions.addEmployee),
      exhaustMap(({employee})=>this.service.addEmployee(employee).pipe(
        map((employee)=>EmployeeActions.AddEmployeeActions.addEmployeeSuccess({employee})),
        catchError(error=>of(EmployeeActions.AddEmployeeActions.addEmployeeFailure({error})))
      ))
    )
  })

  deleteEmployee$ = createEffect(()=>{
    return this.actions$.pipe(
      ofType(EmployeeActions.DeleteEmployeeActions.deleteEmployee),
      exhaustMap(({empId})=>this.service.deleteEmployee(empId).pipe(
        map((employee)=>EmployeeActions.DeleteEmployeeActions.deleteEmployeeSuccess({employee})),
        catchError((error)=>of(EmployeeActions.DeleteEmployeeActions.deleteEmployeeFailure({error})))
      ))
    )
  })

}
