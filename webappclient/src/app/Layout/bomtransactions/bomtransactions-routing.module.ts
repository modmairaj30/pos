import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BomtransactionsdetailComponent } from './bomtransactionsdetail/bomtransactionsdetail.component';

const routes: Routes = [
  { path: '',
     component: BomtransactionsdetailComponent,
    
   }
  
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BomtransactionsRoutingModule { }
