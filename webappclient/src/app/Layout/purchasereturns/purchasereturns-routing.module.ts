import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PurchasereturnsdetailComponent } from './purchasereturnsdetail/purchasereturnsdetail.component';

const routes: Routes = [
 { path: '',
    component: PurchasereturnsdetailComponent,
   
  }
 
 ];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PurchasereturnsRoutingModule { }
