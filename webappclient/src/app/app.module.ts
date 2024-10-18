import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgReduxModule } from '@angular-redux/store';
import { NgRedux, DevToolsExtension } from '@angular-redux/store';
import { rootReducer, ArchitectUIState } from './ThemeOptions/store';
import { ConfigActions } from './ThemeOptions/store/config.actions';
import { AppRoutingModule } from './app-routing.module';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { CommonModule, DecimalPipe } from '@angular/common';


import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


// BOOTSTRAP COMPONENTS

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// LAYOUT

import { BaseLayoutComponent } from './Layout/base-layout/base-layout.component';
import { PagesLayoutComponent } from './Layout/pages-layout/pages-layout.component';
import { PageTitleComponent } from './Layout/Components/page-title/page-title.component';

// HEADER

import { HeaderComponent } from './Layout/Components/header/header.component';
import { SearchBoxComponent } from './Layout/Components/header/elements/search-box/search-box.component';
import { UserBoxComponent } from './Layout/Components/header/elements/user-box/user-box.component';

// SIDEBAR

import { SidebarComponent } from './Layout/Components/sidebar/sidebar.component';
import { LogoComponent } from './Layout/Components/sidebar/elements/logo/logo.component';

// FOOTER

import { FooterComponent } from './Layout/Components/footer/footer.component';

// Dashboards

import { AnalyticsComponent } from './DemoPages/Dashboards/analytics/analytics.component';

// Pages

import { ForgotPasswordBoxedComponent } from './DemoPages/UserPages/forgot-password-boxed/forgot-password-boxed.component';
import { LoginBoxedComponent } from './DemoPages/UserPages/login-boxed/login-boxed.component';


// Tables


import { TabModule } from './Layout/Components/tabs/tab1.module';
import { PartyMasterModule } from './Layout/partymaster/partymaster.module';
import { IconService, NodeService, ProductService, VersionService } from './Layout/service';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputSwitchModule } from 'primeng/inputswitch';
import { CalendarModule } from 'primeng/calendar';
import { SliderModule } from 'primeng/slider';
import { MultiSelectModule } from 'primeng/multiselect';
import { ContextMenuModule } from 'primeng/contextmenu';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { ProgressBarModule } from 'primeng/progressbar';
import { InputTextModule } from 'primeng/inputtext';
import { FileUploadModule } from 'primeng/fileupload';
import { ToolbarModule } from 'primeng/toolbar';
import { RatingModule } from 'primeng/rating';
import { InputNumberModule } from 'primeng/inputnumber';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { LazyLoadEvent } from 'primeng/api';
import {SkeletonModule} from 'primeng/skeleton';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { KeyFilterModule } from 'primeng/keyfilter';
import { AuthInterceptor, authInterceptorProviders } from './DemoPages/UserPages/_helpers/auth.interceptor';
import { BoardUserComponent } from './DemoPages/UserPages/board-user/board-user.component';
import { BoardModeratorComponent } from './DemoPages/UserPages/board-moderator/board-moderator.component';
import { BoardAdminComponent } from './DemoPages/UserPages/board-admin/board-admin.component';
import { ProfileComponent } from './DemoPages/UserPages/profile/profile.component';
import { HomeComponent } from './DemoPages/UserPages/home/home.component';
import { RegisterComponent } from './DemoPages/UserPages/register/register.component';
import { LoginComponent } from './DemoPages/UserPages/login/login.component';
import { UserService } from './DemoPages/UserPages/_services/user.service';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CustomSharedModule } from './shared/custom-shared.module';
import { UserMasterModule } from './Layout/usermaster/usermaster.module';
import { AuthGuard } from './shared/gurads/auth.guard';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { ngxLoadingAnimationTypes, NgxLoadingModule } from 'ngx-loading';
import { DialogService } from 'primeng/dynamicdialog';
import { HttpErrorInterceptor } from './DemoPages/UserPages/_helpers/http-error.interceptot';
import { StockverificationreportsComponent } from './Layout/stockverificationreports/stockverificationreports.component';
import { BomModule } from './layout/bom/bom.module';
import { BomtransactionModule } from './Layout/bomtransaction/bomtransaction.module';



// Widgets


const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  declarations: [

    ///home

    // LAYOUT

    AppComponent,
    BaseLayoutComponent,
    PagesLayoutComponent,
    PageTitleComponent,

    // HEADER

    HeaderComponent,
    SearchBoxComponent,
    UserBoxComponent,

    // SIDEBAR

    SidebarComponent,
    LogoComponent,

    // FOOTER

    FooterComponent,

    // Dashboards

    AnalyticsComponent,

    // User Pages

    ForgotPasswordBoxedComponent,
    LoginBoxedComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent,
   
 
    // Tables

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgReduxModule,
    NgbModule,
    CommonModule,
    LoadingBarRouterModule,
    // Angular Bootstrap Components

    PerfectScrollbarModule,
    NgbModule,
    NgxLoadingModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    //primeng

    CalendarModule,
    SliderModule,
    MultiSelectModule,
    ContextMenuModule,
    DropdownModule,
    InputTextModule,
    ProgressBarModule,
    FileUploadModule,
    RatingModule,
    RadioButtonModule,
    InputNumberModule,
    ConfirmDialogModule,
    DialogModule,
    ScrollPanelModule,
    TooltipModule,
    ButtonModule,
    RadioButtonModule,
    InputSwitchModule,
    TabModule,
    TableModule,
    ToastModule,
    ToolbarModule,
    PartyMasterModule,
    UserMasterModule,
    AutoCompleteModule,
    ProgressSpinnerModule,
    KeyFilterModule,
    CustomSharedModule,
    SkeletonModule,
    BomModule,
    BomtransactionModule
   
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [authInterceptorProviders, AuthGuard,
    {
      provide:
        PERFECT_SCROLLBAR_CONFIG,
      // DROPZONE_CONFIG,
      useValue:
        DEFAULT_PERFECT_SCROLLBAR_CONFIG,

      // DEFAULT_DROPZONE_CONFIG,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    }
    ,
    ConfigActions,
    DecimalPipe,
    NodeService, IconService, VersionService, ProductService, UserService, DialogService,],
  bootstrap: [AppComponent]
})

export class AppModule {
  constructor(private ngRedux: NgRedux<ArchitectUIState>,
    private devTool: DevToolsExtension) {

    this.ngRedux.configureStore(
      rootReducer,
      {} as ArchitectUIState,
      [],
      [devTool.isEnabled() ? devTool.enhancer() : f => f]
    );

  }
}
