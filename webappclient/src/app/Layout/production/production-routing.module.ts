import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductiondetailComponent } from './productiondetail/productiondetail.component';

const routes: Routes = [
 { path: '',
    component: ProductiondetailComponent,
   
  }
 
 ];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductionRoutingModule { }
