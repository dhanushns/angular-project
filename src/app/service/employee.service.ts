import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class EmployeeService {

  employees: any[] = [];

  constructor(private http : HttpClient) {}

  private baseURL = "http://localhost:3000/employees";

  getAllEmployee() : Observable<any[]>{
    return this.http.get<any[]>(this.baseURL);
  }

  getEmployee(id: string): Observable<any>{
    return this.http.get(this.baseURL + "/" + id);
  }

  addEmployee(newEmployee: any) : Observable<any>{
    return this.http.post(this.baseURL + "/", newEmployee);
  }

  updateEmployee(id: string, employee: any){
    return this.http.put(this.baseURL + "/" + id, employee);
  }

  deleteEmployee(id:string){
    return this.http.delete(this.baseURL + "/" + id);
  }

}
