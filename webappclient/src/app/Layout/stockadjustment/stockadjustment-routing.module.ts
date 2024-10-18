import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StockadjustmentdetailComponent } from './stockadjustmentdetail/stockadjustmentdetail.component';

const routes: Routes = [
 { path: '',
    component: StockadjustmentdetailComponent,
   
  }
 
 ];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockadjustmentRoutingModule { }
