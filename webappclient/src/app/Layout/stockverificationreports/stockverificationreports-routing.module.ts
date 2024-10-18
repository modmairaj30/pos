import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StockverificationdetailreportsComponent } from './stockverificationdetailreports/stockverificationdetailreports.component';

const routes: Routes = [
 { path: '',
    component: StockverificationdetailreportsComponent,
   
  }
 
 ];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockverificationreportsRoutingModule { }
