import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LocationmasterdetailComponent } from './locationmasterdetail/locationmasterdetail.component';

const routes: Routes = [
 { path: '',
    component: LocationmasterdetailComponent,
   
  }
 
 ];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LocationMasterRoutingModule { }
