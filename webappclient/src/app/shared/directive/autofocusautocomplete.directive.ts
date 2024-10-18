import { AfterViewInit, Directive, ElementRef } from '@angular/core';
import { AutoComplete } from 'primeng/autocomplete';

@Directive({
  selector: '[autofocusac]'
})
export class AutofocusForAutoCompleteDirective implements AfterViewInit {
  constructor(private el: AutoComplete) {}

  ngAfterViewInit() {
    debugger;
    setTimeout(() => {
        this.el.focusInput();

  }, 500);
    
  }
}
