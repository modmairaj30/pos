import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {BaseLayoutComponent} from './Layout/base-layout/base-layout.component';
import {PagesLayoutComponent} from './Layout/pages-layout/pages-layout.component';

// Dashboards

import {AnalyticsComponent} from './DemoPages/Dashboards/analytics/analytics.component';

// Pages

import {ForgotPasswordBoxedComponent} from './DemoPages/UserPages/forgot-password-boxed/forgot-password-boxed.component';
import {LoginBoxedComponent} from './DemoPages/UserPages/login-boxed/login-boxed.component';


// Tables


import { HomeComponent } from './DemoPages/UserPages/home/home.component';
import { LoginComponent } from './DemoPages/UserPages/login/login.component';
import { RegisterComponent } from './DemoPages/UserPages/register/register.component';
import { ProfileComponent } from './DemoPages/UserPages/profile/profile.component';
import { BoardUserComponent } from './DemoPages/UserPages/board-user/board-user.component';
import { BoardModeratorComponent } from './DemoPages/UserPages/board-moderator/board-moderator.component';
import { BoardAdminComponent } from './DemoPages/UserPages/board-admin/board-admin.component';
import { AuthGuard } from './shared/gurads/auth.guard';

// Widgets




const routes: Routes = [
  {
    path: '',
    component: LoginBoxedComponent,
    children: [

    ]

  },
  {
    path: '',
    component: PagesLayoutComponent,
    children: [

      // User Pages
/*
      {path: 'pages/login-boxed', component: LoginBoxedComponent, data: {extraParameter: ''}},
      {path: 'pages/register-boxed', component: RegisterBoxedComponent, data: {extraParameter: ''}},
      {path: 'pages/forgot-password-boxed', component: ForgotPasswordBoxedComponent, data: {extraParameter: ''}},
*/
      { path: 'pages/home', component: HomeComponent },
      { path: 'pages/login', component: LoginComponent },
      { path: 'pages/register', component: RegisterComponent },
      { path: 'pages/profile', component: ProfileComponent },
      { path: 'pages/user', component: BoardUserComponent },
      { path: 'pages/mod', component: BoardModeratorComponent },
      { path: 'pages/admin', component: BoardAdminComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' }
    ]
  },
  {
    path: '',
    component: BaseLayoutComponent,
    canActivate: [AuthGuard],
    children: [

      // Dashboads

      { path: 'layout', component: AnalyticsComponent, data: { extraParameter: 'dashboardsMenu' } },
      { path: 'settings', component: AnalyticsComponent, data: { extraParameter: 'dashboardsMenu',active:3} },
     
      // Tables

     
      // Masters
      {
        path: 'masters/about',
        loadChildren: () => import('./layout/about/about.module')
          .then(mod => mod.AboutModule)
      },

      {
        path: 'masters/locationmaster',
        loadChildren: () => import('./layout/locationmaster/locationmaster.module')
          .then(mod => mod.LocationMasterModule), data: {extraParameter: 'masterMenu'}
      },

      {
        path: 'masters/titlemaster',
        loadChildren: () => import('./layout/titlemaster/titlemaster.module')
          .then(mod => mod.TitleMasterModule), data: {extraParameter: 'masterMenu'}
      },

      {
        path: 'masters/partymasters',
        loadChildren: () => import('./layout/partymaster/partymaster.module')
          .then(mod => mod.PartyMasterModule), data: {extraParameter: 'masterMenu'}
      },

      {
        path: 'masters/productgroups',
        loadChildren: () => import('./layout/productgroups/productgroups.module')
          .then(mod => mod.ProductgroupsModule), data: {extraParameter: 'masterMenu'}
      },

          
      {
        path: 'masters/subjects',
        loadChildren: () => import('./layout/subjects/subjects.module')
          .then(mod => mod.SubjectsModule), data: {extraParameter: 'masterMenu'}
      },

      {
        path: 'masters/department',
        loadChildren: () => import('./layout/department/department.module')
          .then(mod => mod.DepartmentModule), data: {extraParameter: 'masterMenu'}
      },

      

      {
        path: 'masters/employeemaster',
        loadChildren: () => import('./layout/employeemaster/employeemaster.module')
          .then(mod => mod.EmployeeMasterModule), data: {extraParameter: 'masterMenu'}
      },

      {
        path: 'masters/usermaster',
        loadChildren: () => import('./layout/usermaster/usermaster.module')
          .then(mod => mod.UserMasterModule), data: {extraParameter: 'masterMenu'}
      },

      {
        path: 'masters/designation',
        loadChildren: () => import('./layout/designation/designation.module')
          .then(mod => mod.DesignationModule), data: {extraParameter: 'masterMenu'}
      },
      {
        path: 'masters/bom',
        loadChildren: () => import('./layout/bom/bom.module')
          .then(mod => mod.BomModule), data: {extraParameter: 'masterMenu'}
      },

      {
        path: 'masters/modeofpayment',
        loadChildren: () => import('./layout/modeofpayment/modeofpayment.module')
          .then(mod => mod.ModeofpaymentModule), data: {extraParameter: 'masterMenu'}
      },

      {
        path: 'masters/category',
        loadChildren: () => import('./layout/category/category.module')
          .then(mod => mod.CategoryModule), data: {extraParameter: 'masterMenu'}
      },

      {
        path: 'masters/contralocation',
        loadChildren: () => import('./layout/contralocation/contralocation.module')
          .then(mod => mod.ContralocationModule), data: {extraParameter: 'masterMenu'}
      },

      {
        path: 'masters/membership',
        loadChildren: () => import('./layout/membership/membership.module')
          .then(mod => mod.MembershipModule), data: {extraParameter: 'masterMenu'}
      },

      {
        path: 'masters/authormaster',
        loadChildren: () => import('./layout/authormaster/authormaster.module')
          .then(mod => mod.AuthormasterModule), data: {extraParameter: 'masterMenu'}
      },

      {
        path: 'purchase/purchaseinvoice',
        loadChildren: () => import('./layout/purchaseinvoice/purchaseinvoice.module')
          .then(mod => mod.PurchaseinvoiceModule), data: {extraParameter: 'purchaseMenu'}
      },

      {
        path: 'purchase/purchasereturns',
        loadChildren: () => import('./layout/purchasereturns/purchasereturns.module')
          .then(mod => mod.PurchasereturnsModule), data: {extraParameter: 'purchaseMenu'}
      },

      {
        path: 'sales/salesinvoice',
        loadChildren: () => import('./layout/salesinvoice/salesinvoice.module')
          .then(mod => mod.SalesinvoiceModule), data: {extraParameter: 'salesMenu'}
      },

      {
        path: 'sales/salesreturns',
        loadChildren: () => import('./layout/salesreturns/salesreturns.module')
          .then(mod => mod.SalesreturnsModule), data: {extraParameter: 'salesMenu'}
      },

      {
        path: 'sales/approvalmemo',
        loadChildren: () => import('./layout/approvalmemo/approvalmemo.module')
          .then(mod => mod.ApprovalmemoModule), data: {extraParameter: 'salesMenu'}
      },

      {
        path: 'sales/stockadjustment',
        loadChildren: () => import('./layout/stockadjustment/stockadjustment.module')
          .then(mod => mod.StockadjustmentModule), data: {extraParameter: 'salesMenu'}
      },

      {
        path: 'paymentsreceipts/payments',
        loadChildren: () => import('./layout/payments/payments.module')
          .then(mod => mod.PaymentsModule), data: {extraParameter: 'paymentsreceiptsMenu'}
      },

      {
        path: 'paymentsreceipts/receipts',
        loadChildren: () => import('./layout/receipts/receipts.module')
          .then(mod => mod.ReceiptsModule), data: {extraParameter: 'paymentsreceiptsMenu'}
      },

      {
        path: 'stocks/stocktransferrequisition',
        loadChildren: () => import('./layout/stocktransferrequisition/stocktransferrequisition.module')
          .then(mod => mod.StocktransferrequisitionModule), data: {extraParameter: 'stocksMenu'}
      },

      {
        path: 'stocks/stocktransfer',
        loadChildren: () => import('./layout/stocktransfer/stocktransfer.module')
          .then(mod => mod.stocktransferModule), data: {extraParameter: 'stocksMenu'}
      },

      {
        path: 'stocks/stockentry',
        loadChildren: () => import('./layout/stockentry/stockentry.module')
          .then(mod => mod.StockentryModule), data: {extraParameter: 'stocksMenu'}
      },

      {
        path: 'stocks/stockreceipts',
        loadChildren: () => import('./layout/stockreceipts/stockreceipts.module')
          .then(mod => mod.StockreceiptsModule), data: {extraParameter: 'stocksMenu'}
      },

      {
        path: 'stocks/initiatestocktransfers',
        loadChildren: () => import('./layout/initiatestocktransfers/initiatestocktransfers.module')
          .then(mod => mod.InitiatestocktransfersModule), data: {extraParameter: 'stocksMenu'}
      },

      {
        path: 'production/production',
        loadChildren: () => import('./layout/production/production.module')
          .then(mod => mod.ProductionModule), data: {extraParameter: 'productionMenu'}
      },

      {
        path: 'production/bomtransaction',
        loadChildren: () => import('./layout/bomtransaction/bomtransaction.module')
          .then(mod => mod.BomtransactionModule), data: {extraParameter: 'productionMenu'}
      },

      {
        path: 'stockverification/stockverification',
        loadChildren: () => import('./layout/stockverification/stockverification.module')
          .then(mod => mod.StockverificationModule), data: {extraParameter: 'stockverificationMenu'}
      },
      {
        path: 'stockverificationreports/stockverificationreports',
        loadChildren: () => import( './Layout/stockverificationreports/stockverificationreports.module')
          .then(mod => mod.StockverificationreportsModule), data: {extraParameter: 'reportsMenu'}
      },
      {
        path: 'generalreports/generalreports',
        loadChildren: () => import( './Layout/generalreports/generalreports.module')
          .then(mod => mod.GeneralreportsModule), data: {extraParameter: 'reportsMenu'}
      },
      {
        path: 'reportlist/reportlist',
        loadChildren: () => import( './Layout/reportlist/reportlist.module')
          .then(mod => mod.ReportlistModule), data: {extraParameter: 'reportsMenu'}
      },

    ]
  },
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    relativeLinkResolution: 'legacy'
})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
