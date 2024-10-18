import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SalesinvoicedetailComponent } from './salesinvoicedetail/salesinvoicedetail.component';

const routes: Routes = [
 { path: '',
    component: SalesinvoicedetailComponent,
   
  }
 
 ];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesinvoiceRoutingModule { }
