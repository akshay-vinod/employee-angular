import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Employee } from '../Employee';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};
@Injectable({
  providedIn: 'root',
})
export class ActionService {
  private apiUrl = 'http://localhost:3000/employee';
  constructor(private http: HttpClient) {}
  getEmployee(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.apiUrl);
  }
  deleteemployee(employee: Employee): Observable<Employee> {
    const api = `${this.apiUrl}/${employee.id}`;
    return this.http.delete<Employee>(api);
  }
  addEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.apiUrl, employee, httpOptions);
  }
  updateEmployee(employee: Employee): Observable<Employee> {
    const api = `${this.apiUrl}/${employee.id}`;
    return this.http.put<Employee>(api, employee, httpOptions);
  }
}
