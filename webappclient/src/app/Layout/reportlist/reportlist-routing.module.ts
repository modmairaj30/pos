import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportlistdetailComponent } from './reportlistdetail/reportlistdetail.component';

const routes: Routes = [
  { path: '',
component: ReportlistdetailComponent,

}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportlistRoutingModule { }
