import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductgroupsdetailComponent } from './productgroupsdetail/productgroupsdetail.component';

const routes: Routes = [
 { path: '',
    component: ProductgroupsdetailComponent,
   
  }
 
 ];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductgroupsRoutingModule { }
