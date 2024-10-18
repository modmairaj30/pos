import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TitlemasterdetailComponent } from './titlemasterdetail/titlemasterdetail.component';

const routes: Routes = [
 { path: '',
    component: TitlemasterdetailComponent,
   
  }
 
 ];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TitleMasterRoutingModule { }
