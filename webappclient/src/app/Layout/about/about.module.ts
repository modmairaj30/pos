import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutComponent } from './about.component';
import { AboutRoutingModule } from './about-routing.module';
import { ContactComponent } from './contact';
import { MailingComponent } from './contact/mailing/mailing.component';
import { MapComponent } from './contact/map/map.component';
import { TabModule } from '../Components/tabs/tab1.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  imports: [
    CommonModule,
    AboutRoutingModule,
    TabModule,
    NgbModule,
    ],
  exports: [
    AboutComponent
  ],
  declarations: [
    AboutComponent,ContactComponent,MailingComponent,MapComponent
  ],
  providers: [
  ],
})
export class AboutModule { }
