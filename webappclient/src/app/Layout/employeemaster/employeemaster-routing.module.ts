import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeemasterdetailComponent } from './employeemasterdetail/employeemasterdetail.component';

const routes: Routes = [
 { path: '',
    component: EmployeemasterdetailComponent,
   
  }
 
 ];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeMasterRoutingModule { }
