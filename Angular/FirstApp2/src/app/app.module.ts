import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';

import { AppComponent } from './app.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { CreateemployeeComponent } from './employeelist/createemployee/createemployee.component';
import { SelectListValidator } from './selectlistvalidator.directive';
import { ConfirmPasswordDirective } from './confirmpassword.directove';

const routes : Routes =[
  {path:'list',component:EmployeelistComponent},
  {path:'create',component:CreateemployeeComponent},
  {path:'',redirectTo:'list', pathMatch:'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    EmployeelistComponent,
    CreateemployeeComponent,
    SelectListValidator,
    ConfirmPasswordDirective
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BsDatepickerModule.forRoot(),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
