import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApprovalmemodetailComponent } from './approvalmemodetail/approvalmemodetail.component';

const routes: Routes = [
 { path: '',
    component: ApprovalmemodetailComponent,
   
  }
 
 ];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApprovalmemoRoutingModule { }
