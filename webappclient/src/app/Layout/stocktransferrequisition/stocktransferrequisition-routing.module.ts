import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StocktransferrequisitiondetailComponent } from './stocktransferrequisitiondetail/stocktransferrequisitiondetail.component';

const routes: Routes = [
 { path: '',
    component: StocktransferrequisitiondetailComponent,
   
  }
 
 ];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StocktransferrequisitionRoutingModule { }
