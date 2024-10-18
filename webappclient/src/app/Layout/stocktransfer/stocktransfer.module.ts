import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { TabModule } from '../Components/tabs/tab1.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StocktransferComponent } from './stocktransfer.component';
import { StocktransferRoutingModule } from './stocktransfer-routing.module';
import { StocktransferentryComponent } from './stocktransferdetail/stocktransferentry/stocktransferentry.component';
import { StocktransferHistoryComponent } from './stocktransferdetail/stocktransferhistory/stocktransferhistory.component';
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
import { ProductService, TransactionService } from '../service';
import { CustomSearch } from 'src/app/shared/components/customsearch';
import { stocktransferdetailComponent } from './stocktransferdetail';
import { StockverificationModule } from '../stockverification/stockverification.module';
import { StocktransferrequisitionHistory1Component } from './stocktransferdetail/stocktransferrequisitionhistory1/stocktransferrequisitionhistory1.component';







@NgModule({
  imports: [
    CommonModule,
    StocktransferRoutingModule,
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
    
  ],
  declarations: [
    StocktransferComponent,stocktransferdetailComponent,StocktransferentryComponent,StocktransferHistoryComponent,StocktransferrequisitionHistory1Component ],
  providers: [ UserService, authInterceptorProviders, ProductService,TransactionService],
})
export class stocktransferModule { }
