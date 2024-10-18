import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthormasterdetailComponent } from './authormasterdetail/authormasterdetail.component';

const routes: Routes = [
 { path: '',
    component: AuthormasterdetailComponent,
   
  }
 
 ];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthormasterRoutingModule { }
