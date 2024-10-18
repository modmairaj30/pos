import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabComponent } from './tab1.component';
import { TabsComponent } from './tabs1.component';

@NgModule({
  imports: [
    CommonModule,
      ],
  exports: [
    TabComponent,
    TabsComponent
  ],
  declarations: [
    TabComponent,TabsComponent
  ],
  providers: [
  ],
})
export class TabModule { }
