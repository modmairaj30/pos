import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaymentsdetailComponent } from './paymentsdetail/paymentsdetail.component';

const routes: Routes = [
 { path: '',
    component: PaymentsdetailComponent,
   
  }
 
 ];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentsRoutingModule { }
