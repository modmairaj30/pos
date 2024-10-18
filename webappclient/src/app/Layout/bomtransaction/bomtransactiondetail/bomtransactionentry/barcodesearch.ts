import { Component, EventEmitter,ViewChild, Input, Output, HostListener, ElementRef } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { DialogModule } from 'primeng/dialog';


@Component({
  selector: 'app-barcodesearch',
  templateUrl: './barcodesearch.html',
  styles: [`
      :host ::ng-deep .p-button {
          margin: 0 .5rem 0 0;
          min-width: 1rem;
      }

      p {
          margin: 0; 
      }
 
      .confirmation-content {
          display: flex;
          align-items: center;
          justify-content: center;
      }

      :host ::ng-deep .p-dialog .p-button {
          min-width: 1rem;
      }
      :host ::ng-deep  .p-dialog .p-dialog-header {
          padding: 0rem;
      }
      :host ::ng-deep .p-dialog .p-dialog-content{
        padding: 0.2rem;
      }
  `]
})
export class BarcodeSearch {
  @Input()
  content: any[] = [];
  @Output()
  onSelect = new EventEmitter();

  @Output()
  onItem = new EventEmitter();
  @Output()
  rowSelect = new EventEmitter();
  selectedRowData: any;
  @Input()
  value: string;
   @Input()
  value2: string;
  @Input()
  id: string;
  @Input()
  readonly:boolean;
  filteredEmpList2: any[];
  cpt = 0;
  visibleProducts: any[];
  @ViewChild('barcode') barcode: ElementRef;
  constructor(private primengConfig: PrimeNGConfig) { }

  ngOnInit() {

    this.primengConfig.ripple = true;
  }

  displayBasic2: boolean;

  showBasicDialog2() {
   
    this.displayBasic2 = true;
    this.filterEmpList2();
  }
  selectProduct(product: any) {
    debugger;
    //this.messageService.add({severity:'info', summary:'Product Selected', detail: product.name});
  }

  onRowSelect(event) {
    debugger;
    this.value = event.data.barcode;
   // this.value2 = event.data.barcode;
    this.id = event.data.id;
    this.rowSelect.emit(event.data);
    
    this.displayBasic2 = false;
    //this.messageService.add({severity:'info', summary:'Product Selected', detail: event.data.name});
  }

  onRowUnselect(event) {
    debugger;
    //this.messageService.add({severity:'info', summary:'Product Unselected',  detail: event.data.name});
  }


  onChangeSelect() {
    debugger;

    let filtered: any[] = [];
    let query = this.value;
    this.cpt = 0;
    debugger;
    for (let i = 0; i < this.content.length; i++) {
      let item = this.content[i];
      
      if (item.barcode==query) {
    // if (item.barcode.toLowerCase().includes(query.toLowerCase())) {
      //  filtered.push(item);
        this.onSelect.emit(item);
        return;
      }
     
    }
    
    this.onItem.emit();
    
  }

  filterEmpList2() {
    let filtered: any[] = [];
    let query = this.value;
    this.cpt = 0;
    debugger;
    for (let i = 0; i < this.content.length; i++) {
      let item = this.content[i];
      
     // if (item.barcode.indexOf(query) == 0) {
    // if (item.barcode.toLowerCase().includes(query.toLowerCase())) {
        filtered.push(item);
     // }
    }
    //debugger
    this.filteredEmpList2 = filtered;
    this.visibleProducts = filtered;
    this.value2 = "";
  }


  onFilter(event, dt) {
    this.cpt = 0;
    if (event.filteredValue.length > 0) {
      this.selectedRowData = event.filteredValue[0];
      this.visibleProducts = event.filteredValue;
    }
  }
/*
  @HostListener('keydown.ArrowUp', ['$event']) ArrowUp($event: KeyboardEvent) {
    if (this.cpt > 0) {
      this.cpt--;
    }
    this.selectedRowData = this.visibleProducts[this.cpt];
  }

  @HostListener('keydown.ArrowDown', ['$event']) ArrowDown(
    $event: KeyboardEvent
  ) {
    if (this.cpt < this.visibleProducts.length - 1) {
      this.cpt++;
    }
    this.selectedRowData = this.visibleProducts[this.cpt];
  }

  @HostListener('keydown.Enter', ['$event']) Enter($event: KeyboardEvent) {
    // alert('opening product: ' + this.selectedRowData.name);
    debugger;
    this.value = this.selectedRowData.prod_name;
    this.id = this.selectedRowData.id;
    this.onSelect.emit(this.selectedRowData);
    this.displayBasic2 = false;
  }
  */

}
