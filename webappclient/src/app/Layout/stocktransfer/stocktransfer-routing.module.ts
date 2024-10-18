import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { stocktransferdetailComponent } from './stocktransferdetail';


const routes: Routes = [
 { path: '',
    component: stocktransferdetailComponent,
   
  }
 
 ];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StocktransferRoutingModule { }
