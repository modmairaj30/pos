import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MembershipdetailComponent } from './membershipdetail/membershipdetail.component';

const routes: Routes = [
 { path: '',
    component: MembershipdetailComponent,
   
  }
 
 ];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MembershipRoutingModule { }
