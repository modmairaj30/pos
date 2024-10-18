import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InitiatestocktransfersdetailComponent } from './initiatestocktransfersdetail/initiatestocktransfersdetail.component';

const routes: Routes = [
 { path: '',
    component: InitiatestocktransfersdetailComponent,
   
  }
 
 ];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InitiatestocktransfersRoutingModule { }
