import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PartydetailComponent } from './partydetail/partydetail.component';

const routes: Routes = [
 { path: '',
    component: PartydetailComponent,
   
  }
 
 ];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PartyMasterRoutingModule { }
