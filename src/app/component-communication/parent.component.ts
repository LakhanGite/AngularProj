import { Component, OnInit } from '@angular/core';
import { Student } from './Student';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  title : string = "Update Employee";
  eID : number;
  eName : string;
  eAddress : string;
  studentObject = new Student(1, "Aakash Goplani", "Mumbai");

  saveData(employeeDetails){
    this.eID = employeeDetails.employeeID;
    this.eName = employeeDetails.employeeName;
    this.eAddress = employeeDetails.employeeAddress;
  }
}
