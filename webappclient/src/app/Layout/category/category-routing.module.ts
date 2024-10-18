import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategorydetailComponent } from './categorydetail/categorydetail.component';

const routes: Routes = [
 { path: '',
    component: CategorydetailComponent,
   
  }
 
 ];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
