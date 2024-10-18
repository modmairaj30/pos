import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { TabModule } from '../Components/tabs/tab1.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContralocationComponent } from './contralocation.component';
import { ContralocationRoutingModule } from './contralocation-routing.module';
import { ContralocationdetailComponent } from './contralocationdetail';
import { ContralocationentryComponent } from './contralocationdetail/contralocationentry/contralocationentry.component';
import { ContralocationHistoryComponent } from './contralocationdetail/contralocationhistory/contralocationhistory.component';
import { TableModule } from 'primeng/table';
import {CalendarModule} from 'primeng/calendar';
import {SliderModule} from 'primeng/slider';
import {DialogModule} from 'primeng/dialog';
import {MultiSelectModule} from 'primeng/multiselect';
import {ContextMenuModule} from 'primeng/contextmenu';
import {ButtonModule} from 'primeng/button';
import {ToastModule} from 'primeng/toast';
import {InputTextModule} from 'primeng/inputtext';
import {ProgressBarModule} from 'primeng/progressbar';
import {DropdownModule} from 'primeng/dropdown';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UserService } from 'src/app/DemoPages/UserPages/_services/user.service';
import { authInterceptorProviders } from 'src/app/DemoPages/UserPages/_helpers/auth.interceptor';
import {AutoCompleteModule} from 'primeng/autocomplete';
import { CustomSharedModule } from 'src/app/shared/custom-shared.module';
import { ToolbarModule } from 'primeng/toolbar';




@NgModule({
  imports: [
    CommonModule,
    ContralocationRoutingModule,
    TabModule,
    NgbModule,
    TableModule,
    CalendarModule,
		SliderModule,
		DialogModule,
		MultiSelectModule,
		ContextMenuModule,
		DropdownModule,
		ButtonModule,
		ToastModule,
    InputTextModule,
    ProgressBarModule,
    HttpClientModule,
    FormsModule,
    AutoCompleteModule,
    CustomSharedModule,
     ToolbarModule
    ],
  exports: [
    ContralocationComponent
  ],
  declarations: [
    ContralocationComponent,ContralocationdetailComponent,ContralocationentryComponent,ContralocationHistoryComponent
  ],
  providers: [ UserService, authInterceptorProviders],
})
export class ContralocationModule { }
