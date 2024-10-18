import { AfterViewInit, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[autofocusonloading]'
})
export class AutofocusDirective implements AfterViewInit {
  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
      setTimeout(() => {
     // this.searchBoxField.nativeElement.focus();
      this.el.nativeElement.focus();

  }, 500);
    
  }
}
