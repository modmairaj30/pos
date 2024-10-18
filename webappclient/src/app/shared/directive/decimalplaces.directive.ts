import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive( {
    selector: '[DecimalPlaces]'
} )
export class DecimalPlaces {
    
    constructor( private elemRef: ElementRef ) { }
    
    @Input() DecimalPlaces: string;
    @Input() maxValue: string;
    oldValue : number;
    
    @HostListener('input', ['$event']) oninput(event) {
        let e = <any> event

        let valInFloat: number = parseFloat(e.target.value)

        if((this.maxValue !=null || this.maxValue !=undefined ) && this.maxValue.length) {
          if(valInFloat > parseFloat(this.maxValue)) {
            e.target.value = this.oldValue;
            e.preventDefault();
          }else   if (this.DecimalPlaces) {
            let currentCursorPos: number = -1;
            if (typeof this.elemRef.nativeElement.selectionStart == "number") {
                currentCursorPos = this.elemRef.nativeElement.selectionStart;
            } else {
              // Probably an old IE browser 
              // console.log("This browser doesn't support selectionStart");
            }
  
            let dotLength: number = e.target.value.replace(/[^\.]/g, '').length
            // If user has not entered a dot(.) e.target.value.split(".")[1] will be undefined
            let decimalLength = e.target.value.split(".")[1] ? e.target.value.split(".")[1].length : 0;
  
            // (this.DecimalPlaces - 1) because we don't get decimalLength including currently pressed character 
            // currentCursorPos > e.target.value.indexOf(".") because we must allow user's to enter value before dot(.)
            // Checking Backspace etc.. keys because firefox doesn't pressing them while chrome does by default
            if( dotLength > 1 || (dotLength === 1 && e.key === ".") || (decimalLength > (parseInt(this.DecimalPlaces)) && 
              currentCursorPos > e.target.value.indexOf(".")) && ["Backspace", "ArrowLeft", "ArrowRight"].indexOf(e.key) === -1 ) {
              e.target.value = this.oldValue;
              e.preventDefault();
            }else{
              this.oldValue = e.target.value;
            }
          }else{
            this.oldValue = e.target.value;
          }
        }
    }
}

