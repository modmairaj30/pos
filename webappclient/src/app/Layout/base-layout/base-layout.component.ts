import {Component} from '@angular/core';
import {select} from '@angular-redux/store';
import {Observable} from 'rxjs';
import {ConfigActions} from '../../ThemeOptions/store/config.actions';
import {ThemeOptions} from '../../theme-options';
import {animate, query, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styles: [`
    .close {
      font-size: 1.4rem;
      opacity: 0.1;
      transition: opacity 0.3s;
    }
    .nav-link:hover > .close {
      opacity: 0.8;
    }
  `],
  animations: [

    trigger('architectUIAnimation', [
      transition('* <=> *', [
        query(':enter, :leave', [
          style({
            opacity: 0,
            display: 'flex',
            flex: '1',
            transform: 'translateY(-20px)',
            flexDirection: 'column'

          }),
        ]),
        query(':enter', [
          animate('200ms ease', style({ opacity: 1, transform: 'translateY(0)' })),
        ]),

        query(':leave', [
          animate('200ms ease', style({ opacity: 0, transform: 'translateY(-20px)' })),
        ], { optional: true })
      ]),
    ])
  ]
})

export class BaseLayoutComponent {

  @select('config') public config$: Observable<any>;

  tabs = [1, 2, 3, 4, 5];
  counter = this.tabs.length + 1;
  active;
  items :any;
  activeItem: any;
  constructor(public globals: ThemeOptions, public configActions: ConfigActions) {
    this.items = [
      {label: "Slider", routerLink: ['/dashboard', 'slider']},
      {label: "User", routerLink: ['/dashboard', 'user']},
      {label: "Danger", routerLink: ['/dashboard', 'alert']},
    ];
    this.activeItem = this.items[1];
  }

  toggleSidebarMobile() {
    this.globals.toggleSidebarMobile = !this.globals.toggleSidebarMobile;
  }

  

  close(event: MouseEvent, toRemove: number) {
    this.tabs = this.tabs.filter(id => id !== toRemove);
    event.preventDefault();
    event.stopImmediatePropagation();
  }

  add(event: MouseEvent) {
    this.tabs.push(this.counter++);
    event.preventDefault();
  }
}



