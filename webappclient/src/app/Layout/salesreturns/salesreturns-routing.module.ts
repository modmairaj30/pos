import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SalesreturnsdetailComponent } from './salesreturnsdetail/salesreturnsdetail.component';

const routes: Routes = [
 { path: '',
    component: SalesreturnsdetailComponent,
   
  }
 
 ];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesreturnsRoutingModule { }
