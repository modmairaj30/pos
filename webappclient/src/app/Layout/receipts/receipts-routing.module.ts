import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReceiptsdetailComponent } from './receiptsdetail/receiptsdetail.component';

const routes: Routes = [
 { path: '',
    component: ReceiptsdetailComponent,
   
  }
 
 ];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReceiptsRoutingModule { }
