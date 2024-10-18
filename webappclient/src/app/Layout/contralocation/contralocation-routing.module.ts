import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContralocationdetailComponent } from './contralocationdetail/contralocationdetail.component';

const routes: Routes = [
 { path: '',
    component: ContralocationdetailComponent,
   
  }
 
 ];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContralocationRoutingModule { }
