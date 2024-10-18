import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabModule } from '../Components/tabs/tab1.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PurchaseinvoiceComponent } from './purchaseinvoice.component';
import { PurchaseinvoiceRoutingModule } from './purchaseinvoice-routing.module';
import { PurchaseinvoicedetailComponent } from './purchaseinvoicedetail';
import { PurchaseinvoiceentryComponent } from './purchaseinvoicedetail/purchaseinvoiceentry/purchaseinvoiceentry.component';
import { PurchaseinvoiceHistoryComponent } from './purchaseinvoicedetail/purchaseinvoicehistory/purchaseinvoicehistory.component';
import { TableModule } from 'primeng/table';
import { CalendarModule } from 'primeng/calendar';
import { SliderModule } from 'primeng/slider';
import { DialogModule } from 'primeng/dialog';
import { MultiSelectModule } from 'primeng/multiselect';
import { ContextMenuModule } from 'primeng/contextmenu';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { InputTextModule } from 'primeng/inputtext';
import { ProgressBarModule } from 'primeng/progressbar';
import { DropdownModule } from 'primeng/dropdown';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UserService } from 'src/app/DemoPages/UserPages/_services/user.service';
import { authInterceptorProviders } from 'src/app/DemoPages/UserPages/_helpers/auth.interceptor';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CustomSharedModule } from 'src/app/shared/custom-shared.module';
import { ToolbarModule } from 'primeng/toolbar';
import { ProductService } from '../service';
import { NgxLoadingModule } from 'ngx-loading';
import { CustomSearch } from 'src/app/shared/components/customsearch';
import { StockverificationModule } from '../stockverification/stockverification.module';








@NgModule({
  imports: [
    CommonModule,
    PurchaseinvoiceRoutingModule,
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
    NgxLoadingModule,
    StockverificationModule


  ],
  exports: [
    PurchaseinvoiceComponent
  ],
  declarations: [
    PurchaseinvoiceComponent, PurchaseinvoicedetailComponent, PurchaseinvoiceentryComponent, PurchaseinvoiceHistoryComponent],
  providers: [UserService, authInterceptorProviders, ProductService],
})
export class PurchaseinvoiceModule { }
