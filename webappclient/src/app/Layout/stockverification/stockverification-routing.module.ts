import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StockverificationdetailComponent } from './stockverificationdetail/stockverificationdetail.component';

const routes: Routes = [
 { path: '',
    component: StockverificationdetailComponent,
   
  }
 
 ];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockverificationRoutingModule { }
