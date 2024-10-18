import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DesignationdetailComponent } from './designationdetail/designationdetail.component';

const routes: Routes = [
 { path: '',
    component: DesignationdetailComponent,
   
  }
 
 ];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DesignationRoutingModule { }
