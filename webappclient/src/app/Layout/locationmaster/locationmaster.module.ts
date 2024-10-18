import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { TabModule } from '../Components/tabs/tab1.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LocationmasterComponent } from './locationmaster.component';
import { LocationMasterRoutingModule } from './locationmaster-routing.module';
import { LocationmasterdetailComponent } from './locationmasterdetail';
import { LocationmasterentryComponent } from './locationmasterdetail/locationmasterentry/locationmasterentry.component';
import { LocationmasterHistoryComponent } from './locationmasterdetail/locationmasterhistory/locationmasterhistory.component';
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
import { AutofocusDirective } from 'src/app/shared/directive/autofocus.directive';




@NgModule({
  imports: [
    CommonModule,
    LocationMasterRoutingModule,
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
    LocationmasterComponent
  ],
  declarations: [
     LocationmasterComponent,LocationmasterdetailComponent,LocationmasterentryComponent,LocationmasterHistoryComponent
  ],
  providers: [ UserService, authInterceptorProviders],
})
export class LocationMasterModule { }
