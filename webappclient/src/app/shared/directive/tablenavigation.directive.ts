import {
    Directive,
    HostListener,
    Output,
    EventEmitter,
    Input,
  } from '@angular/core';
  import { Table } from 'primeng/table';
  
  @Directive({
    selector: '[tableNavigation]',
  })
  export class TableNavigationDirective {
    /////////
    // (onRowSelect)="doSomething()"
    // (highlightProduct)="selectedProduct = $event" for the highlighting.
    // 'selectedProduct' will be equal to the [(selection)] value in your component
    // [visibleItems]="visibleItems" from component for filtering
    /////////
  
    @Output() highlightProduct: EventEmitter<any> = new EventEmitter();
  
    // If you want to include filtering, you'll want to use this input.
    _visibleItems: any;
    @Input('visibleItems') set visibleItems(items: any) {
      this._visibleItems = items;
      if (this._visibleItems) {
        this.rowIndex = 0;
        this.highlightProduct.emit(this._visibleItems[0]);
        if (this.table.scrollable) {
          this.scrollTable();
        }
      }
    }
  
    wrapper: any;
    rowIndex = 0;
  
    constructor(private table: Table) {
      this._visibleItems = this.table.value;
    }
  
    @HostListener('keydown.ArrowUp', ['$event']) ArrowUp($event: KeyboardEvent) {
      $event.preventDefault();
  
      if (this.rowIndex > 0) {
        this.rowIndex--;
      }
      this.highlightProduct.emit(this._visibleItems[this.rowIndex]);
      if (this.table.scrollable) {
        this.scrollTable();
      }
    }
  
    @HostListener('keydown.ArrowDown', ['$event']) ArrowDown(
      $event: KeyboardEvent
    ) {
      $event.preventDefault();
  
      if (this.rowIndex < this._visibleItems.length - 1) {
        this.rowIndex++;
      }
      this.highlightProduct.emit(this._visibleItems[this.rowIndex]);
      if (this.table.scrollable) {
        this.scrollTable();
      }
    }
  
    @HostListener('keydown.Enter', ['$event']) Enter($event: KeyboardEvent) {
      this.table.onRowSelect.emit({
        originalEvent: $event,
        index: this.rowIndex,
        data: this.table.selection,
        type: 'row',
      });
    }
  
    scrollTable() {
      if (
        this.table.el.nativeElement.children[0].getElementsByClassName(
          'p-datatable-scrollable-body'
        )[0]
      ) {
        this.wrapper =
          this.table.el.nativeElement.children[0].getElementsByClassName(
            'p-datatable-scrollable-body'
          )[0];
      } else if (
        this.table.el.nativeElement.children[0].getElementsByClassName(
          'p-datatable-wrapper'
        )[0]
      ) {
        this.wrapper =
          this.table.el.nativeElement.children[0].getElementsByClassName(
            'p-datatable-wrapper'
          )[0];
      } else {
        this.wrapper = undefined;
        console.error("wrapper is undefined, scroll won't work");
      }
  
      let rows = this.wrapper.getElementsByClassName('p-selectable-row');
  
      // No need to scroll if there aren't any products
      if (!rows.length) {
        return;
      }
      let rowEl = rows[this.rowIndex];
  
      // Scroll all the way to top if first item
      if (rowEl === rows[0]) {
        this.wrapper.scrollTop = 0;
      }
  
      // Change scroll position if not first item and at bottom of scrollbar
      if (rowEl.offsetTop + rowEl.offsetHeight > this.wrapper.offsetHeight) {
        this.wrapper.scrollTop +=
          rowEl.offsetTop +
          rowEl.offsetHeight -
          this.wrapper.scrollTop -
          this.wrapper.offsetHeight;
      }
    }
  }
  