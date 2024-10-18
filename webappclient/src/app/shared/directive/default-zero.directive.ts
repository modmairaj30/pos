import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive( {
    selector: '[DefaultZero]'
} )
export class DefaultZeroDirective {

    constructor( private elemRef: ElementRef ) {
    }

    @HostListener( 'input', ['$event'] ) oninput( event ) {
        let evt = <any>event
        if ( evt.srcElement.value.split( '.' ).length == 2 &&
            evt.srcElement.value.indexOf( "." ) == 0 &&
            evt.srcElement.value.length == 2 ) {
            evt.srcElement.value = 0.0 + evt.srcElement.value;
        }
    }
}
