import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BomtransactiondetailComponent } from './bomtransactiondetail/bomtransactiondetail.component';

const routes: Routes = [
 { path: '',
    component: BomtransactiondetailComponent,
   
  }
 
 ];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BomtransactionRoutingModule { }
