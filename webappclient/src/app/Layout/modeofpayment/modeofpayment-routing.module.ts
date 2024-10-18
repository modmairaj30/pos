import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModeofpaymentdetailComponent } from './modeofpaymentdetail/modeofpaymentdetail.component';

const routes: Routes = [
 { path: '',
    component: ModeofpaymentdetailComponent,
   
  }
 
 ];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModeofpaymentRoutingModule { }
