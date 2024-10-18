import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeneraldetailreportsComponent } from './generaldetailreports/generaldetailreports.component';

const routes: Routes = [
 { path: '',
    component: GeneraldetailreportsComponent,
   
  }
 
 ];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeneralreportsRoutingModule { }
