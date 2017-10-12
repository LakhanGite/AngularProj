import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Student } from './Student';
import { Employee } from './Employee';

@Component({
  selector: 'app-children',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildrenComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() student : Student;
  @Input() message : string;

  employee = new Employee();
  @Output() updateEmployeeDetails = new EventEmitter<Employee>();

  updateRecords(){
    this.employee.employeeID = this.student.studentId;
    this.employee.employeeName = this.student.studentName;
    this.employee.employeeAddress = this.student.studentAddress;

    this.updateEmployeeDetails.emit(this.employee);
  }
}
