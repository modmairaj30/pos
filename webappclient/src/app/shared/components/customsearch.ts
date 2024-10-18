import { Component, EventEmitter, Input, Output, HostListener } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-customsearch',
  templateUrl: './customsearch.html',
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
export class CustomSearch {
  @Input()
  content: any[] = [];
  @Output()
  onSelect = new EventEmitter();
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
    this.value = event.data.prod_name;
    this.value2 = event.data.prod_name;
    this.id = event.data.id;
    this.onSelect.emit(event.data);
    this.displayBasic2 = false;
    //this.messageService.add({severity:'info', summary:'Product Selected', detail: event.data.name});
  }

  onRowUnselect(event) {
    debugger;
    //this.messageService.add({severity:'info', summary:'Product Unselected',  detail: event.data.name});
  }

  filterEmpList2() {
    let filtered: any[] = [];
    let query = this.value;
    this.cpt = 0;
    debugger;
    for (let i = 0; i < this.content.length; i++) {
      let item = this.content[i];
      
     // if (item.prod_name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
     if (item.prod_name.toLowerCase().includes(query.toLowerCase())) {
        filtered.push(item);
      }
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
