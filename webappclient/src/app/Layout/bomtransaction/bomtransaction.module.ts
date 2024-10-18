import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { TabModule } from '../Components/tabs/tab1.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BomtransactionComponent } from './bomtransaction.component';
import { BomtransactionRoutingModule } from './bomtransaction-routing.module';
import { BomtransactiondetailComponent } from './bomtransactiondetail';
import { BomtransactionentryComponent } from './bomtransactiondetail/bomtransactionentry/bomtransactionentry.component';
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
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UserService } from 'src/app/DemoPages/UserPages/_services/user.service';
import { authInterceptorProviders } from 'src/app/DemoPages/UserPages/_helpers/auth.interceptor';
import {AutoCompleteModule} from 'primeng/autocomplete';
import { CustomSharedModule } from 'src/app/shared/custom-shared.module';
import { ToolbarModule } from 'primeng/toolbar';
import { ProductService } from '../service';
import { NgxLoadingModule } from 'ngx-loading';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { CustomSearch } from 'src/app/shared/components/customsearch';
import { StockverificationModule } from '../stockverification/stockverification.module';
import { BomtransactionHistoryComponent } from './bomtransactiondetail/bomtransactionhistory/bontransactionhistory.component';
import { BarcodeSearch } from './bomtransactiondetail/bomtransactionentry/barcodesearch';
import { ThermalPrint } from './bomtransactiondetail/bomtransactionentry/thermalprint';





@NgModule({
  imports: [
    CommonModule,
    BomtransactionRoutingModule,
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
    ToolbarModule,
    InputTextModule,
    ProgressBarModule,
    HttpClientModule,
    FormsModule,
    AutoCompleteModule,
    CustomSharedModule,
    StockverificationModule,
    ConfirmPopupModule,
    NgxLoadingModule
    
    ],
  exports: [
    BomtransactionComponent
  ],
  declarations: [
    BomtransactionComponent,BomtransactiondetailComponent,BomtransactionentryComponent,BomtransactionHistoryComponent,BarcodeSearch, ThermalPrint ],
  providers: [ UserService, authInterceptorProviders, ProductService],
})
export class BomtransactionModule { }
