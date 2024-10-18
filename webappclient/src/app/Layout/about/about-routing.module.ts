import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about.component';
import { ContactComponent } from './contact';
import { MailingComponent } from './contact/mailing/mailing.component';
import { MapComponent } from './contact/map/map.component';



const routes: Routes = [
 { path: '',
    component: ContactComponent,
    children: [
    {path: 'contact', component: ContactComponent}
  ]
  }
 
 ];

 

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
