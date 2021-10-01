import { Component, OnInit, Input, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Employee } from 'src/app/Employee';
import { ActionService } from 'src/app/services/action.service';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  name!: string;
  department!: string;
  date!: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Employee,
    private actionService: ActionService
  ) {}

  ngOnInit(): void {}
  onUpdate() {
    if (!this.name) {
      this.name = this.data.name;
    }
    if (!this.department) {
      this.department = this.data.department;
    }
    if (!this.date) {
      this.date = this.data.joiningDate;
    }
    const dataInput = {
      id: this.data.id,
      name: this.name,
      department: this.department,
      joiningDate: this.date,
    };
    this.actionService
      .updateEmployee(dataInput)
      .subscribe(() => window.location.reload());
  }
}
