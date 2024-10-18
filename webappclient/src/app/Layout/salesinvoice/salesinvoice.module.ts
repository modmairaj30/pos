import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { TabModule } from '../Components/tabs/tab1.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SalesinvoiceComponent } from './salesinvoice.component';
import { SalesinvoiceRoutingModule } from './salesinvoice-routing.module';
import { SalesinvoicedetailComponent } from './salesinvoicedetail';
import { SalesinvoiceentryComponent } from './salesinvoicedetail/salesinvoiceentry/salesinvoiceentry.component';
import { SalesinvoiceHistoryComponent } from './salesinvoicedetail/salesinvoicehistory/salesinvoicehistory.component';
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
import { ProductService } from '../service';
import { SalesinvoicepaymentComponent } from './salesinvoicedetail/salesinvoicepayment/salesinvoicepayment.component';
import { CustomSearch } from 'src/app/shared/components/customsearch';
import { StockverificationModule } from '../stockverification/stockverification.module';
import { PaymentComponent } from 'src/app/shared/components/payment';




@NgModule({
  imports: [
    CommonModule,
    SalesinvoiceRoutingModule,
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
    
    ],
  exports: [
    SalesinvoiceComponent
  ],
  declarations: [
    SalesinvoiceComponent,SalesinvoicedetailComponent,SalesinvoiceentryComponent,PaymentComponent,SalesinvoiceHistoryComponent,SalesinvoicepaymentComponent ],
  providers: [ UserService, authInterceptorProviders, ProductService],
})
export class SalesinvoiceModule { }
