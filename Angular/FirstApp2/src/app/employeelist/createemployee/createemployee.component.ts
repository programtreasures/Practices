import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import{ BsDatepickerConfig }from 'ngx-bootstrap/datepicker'
import { Employee } from '../../models/employee.model';

@Component({
  selector: 'app-createemployee',
  templateUrl: './createemployee.component.html',
  styleUrls: ['./createemployee.component.css']
})
export class CreateemployeeComponent implements OnInit {
  employee: Employee = {
    id:null,
    active : false,
    dateofbirth: null,
    department: '',
    email:null,
    gender: 'male',
    imagePath: null,
    name:null,
    phone:null,
    salary:null,
    contactpreferance:null
  };
  showimage:boolean = false;
dobdatepickerconfig:Partial<BsDatepickerConfig>;
  departments = [
    {id:1, name:'HR'},
    {id:2, name:'QA'},
    {id:3, name:'Development'},
    {id:4, name:'Manager'}
  ]

  constructor() { 
    this.dobdatepickerconfig = {
      containerClass:'theme-dark-blue',
      showWeekNumbers:false
    }
  }

toggleShowImage(){
  this.showimage = !this.showimage;
}

  ngOnInit() {
  }

  saveEmployee(employeeForm: Employee) : void
  {
   console.log(employeeForm);
  }

}
