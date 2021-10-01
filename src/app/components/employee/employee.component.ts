import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  Inject,
} from '@angular/core';
import { Employee } from 'src/app/Employee';
import { MatDialog } from '@angular/material/dialog';
import { FormComponent } from '../form/form.component';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
})
export class EmployeeComponent implements OnInit {
  @Input() employee!: Employee;
  @Output() DeleteEmployee: EventEmitter<Employee> = new EventEmitter();
  faTimes = faTimes;
  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {}
  openDialog() {
    const dialogRef = this.dialog.open(FormComponent, {
      data: {
        id: this.employee.id,
        name: this.employee.name,
        department: this.employee.department,
        joiningDate: this.employee.joiningDate,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
  deleteEmployee(employee: Employee) {
    this.DeleteEmployee.emit(employee);
  }
}
