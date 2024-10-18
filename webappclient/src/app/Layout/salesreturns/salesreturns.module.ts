import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { TabModule } from '../Components/tabs/tab1.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SalesreturnsComponent } from './salesreturns.component';
import { SalesreturnsRoutingModule } from './salesreturns-routing.module';
import { SalesreturnsHistoryComponent } from './salesreturnsdetail/salesreturnshistory/salesreturnshistory.component';
import { SalesreturnsdetailComponent } from './salesreturnsdetail';
import { SalesreturnsentryComponent } from './salesreturnsdetail/salesreturnsentry/salesreturnsentry.component';
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
import { CustomSearch } from 'src/app/shared/components/customsearch';
import { StockverificationModule } from '../stockverification/stockverification.module';
import { SalesinvoiceHistory1Component } from './salesreturnsdetail/salesinvoicehistory1/salesinvoicehistory1.component';
import { SalesReturnspaymentComponent } from './salesreturnsdetail/salesreturnspayment/salesreturnspayment.component';




@NgModule({
  imports: [
    CommonModule,
    SalesreturnsRoutingModule,
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
    NgxLoadingModule
    
    ],
  exports: [
    SalesreturnsComponent
  ],
  declarations: [
    SalesreturnsComponent,SalesreturnsdetailComponent,SalesreturnsentryComponent,SalesreturnsHistoryComponent,SalesReturnspaymentComponent,SalesinvoiceHistory1Component ],
  providers: [ UserService, authInterceptorProviders, ProductService],
})
export class SalesreturnsModule { }
