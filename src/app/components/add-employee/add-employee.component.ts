import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Employee } from 'src/app/Employee';
@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
})
export class AddEmployeeComponent implements OnInit {
  name: string = '';
  department: string = '';
  date: string = '';
  @Output() sendData: EventEmitter<Employee> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
  onSubmit() {
    const newEmpoyee = {
      name: this.name,
      department: this.department,
      joiningDate: this.date,
    };
    this.sendData.emit(newEmpoyee);
    this.name = '';
    this.date = '';
    this.department = '';
  }
}
