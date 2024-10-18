import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StockentrydetailComponent } from './stockentrydetail/stockentrydetail.component';

const routes: Routes = [
 { path: '',
    component: StockentrydetailComponent,
   
  }
 
 ];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockentryRoutingModule { }
