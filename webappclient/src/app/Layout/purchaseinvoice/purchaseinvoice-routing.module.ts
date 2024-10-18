import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PurchaseinvoicedetailComponent } from './purchaseinvoicedetail/purchaseinvoicedetail.component';

const routes: Routes = [
  {
    path: '',
    component: PurchaseinvoicedetailComponent,

  }

];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PurchaseinvoiceRoutingModule { }
