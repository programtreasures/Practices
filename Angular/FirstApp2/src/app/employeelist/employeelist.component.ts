import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';
import { identifierModuleUrl } from '@angular/compiler';

@Component({  
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {

  employees: Employee[] =[  {
    id:1,name:'John',email:'john@exmple.com',dateofbirth: new Date('06/12/1994'),active:true
    ,salary:5000,imagePath:'assets/images/1.jpg', gender:'male', phone:95686566, department: 'QA',
    contactpreferance:'email'
  },
  {
    id:2,name:'Mark',email:'mark@exmple.com',dateofbirth: new Date('12/08/1994'),active:true
    ,salary:7000,imagePath:'assets/images/2.jpg', gender:'male', phone:95686566, department: 'Development'
    , contactpreferance:'phone'
  }
];

  constructor() { }

  ngOnInit() {    
  }

}
