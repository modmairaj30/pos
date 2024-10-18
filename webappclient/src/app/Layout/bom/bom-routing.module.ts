import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BomdetailComponent } from './bomdetail/bomdetail.component';

const routes: Routes = [
 { path: '',
    component: BomdetailComponent,
   
  }
 
 ];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BomRoutingModule { }
