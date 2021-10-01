import { Component, OnInit } from '@angular/core';
import { ActionService } from 'src/app/services/action.service';
import { Employee } from 'src/app/Employee';
import { GlobalDataService } from 'src/app/services/global-data.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css'],
})
export class ListEmployeeComponent implements OnInit {
  employees: Employee[] = [];
  show: boolean = false;
  subscription!: Subscription;
  constructor(
    private actionService: ActionService,
    private dataService: GlobalDataService
  ) {
    this.subscription = this.dataService
      .onToggle()
      .subscribe((data) => (this.show = data));
  }

  ngOnInit(): void {
    this.actionService
      .getEmployee()
      .subscribe((data) => (this.employees = data));
  }
  onDelete(employee: Employee) {
    this.actionService
      .deleteemployee(employee)
      .subscribe(
        () =>
          (this.employees = this.employees.filter(
            (data) => data.id != employee.id
          ))
      );
  }
  onSendData(employee: Employee) {
    this.actionService
      .addEmployee(employee)
      .subscribe(() => this.employees.push(employee));
  }
}
