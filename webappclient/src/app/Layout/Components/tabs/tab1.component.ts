import {Component, Input} from '@angular/core';


@Component({
  selector: 'app-tab',
  templateUrl: './tab1.component.html',
})
export class TabComponent {
  @Input('tabTitle') title: string;
  @Input('tabParent') parent: string;
  @Input() active = false;
}
