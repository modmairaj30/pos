import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StockreceiptsdetailComponent } from './stockreceiptsdetail/stockreceiptsdetail.component';

const routes: Routes = [
 { path: '',
    component: StockreceiptsdetailComponent,
   
  }
 
 ];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockreceiptsRoutingModule { }
