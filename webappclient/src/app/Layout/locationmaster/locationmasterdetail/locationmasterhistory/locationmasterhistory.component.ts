import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { QueryList, ViewChildren } from '@angular/core';
import { Observable } from 'rxjs';
import jsPDF from 'jspdf';
//import * as jsPDF from 'jspdf';
import 'jspdf-autotable';

import html2canvas from 'html2canvas';



import {
  UserService,
} from 'src/app/DemoPages/UserPages/_services/user.service';
import { MasterService } from 'src/app/layout/service';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-locationmasterhistory',
  templateUrl: './locationmasterhistory.component.html',
  styleUrls: ['./locationmaster.scss'],
  providers: [MessageService]
})
export class LocationmasterHistoryComponent implements OnInit {
  selectedRowData: any[];
  user: any = [];
  content: any[] = [];
  public columnNames: string[] = ["Branch", "Code"]
  cols: any[];
  _selectedColumns: any[];

  @Output()
  editLocationmasterentry = new EventEmitter();

  constructor(private masterService: MasterService, private messageService: MessageService) {
    this.cols = [
      { field: 'id', header: 'Id' },
      { field: 'locationName', header: 'Hub' },
      { field: 'grossAmt', header: 'Gross Amt' },
      { field: 'docDt', header: 'Doc Dt' },
      { field: 'docNo', header: 'Doc No' },
      { field: 'partyId', header: 'Party Id' },
      { field: 'exciseduty', header: 'Excise Duty' },
      { field: 'address', header: 'Address' },
      { field: 'city', header: 'City' },
      { field: 'pin', header: 'Pin' },
      { field: 'state', header: 'State' },
     /* { field: 'payterms', header: 'Payterms' },
      { field: 'transporter', header: 'Transporter' },
      { field: 'salestax', header: 'Sales Tax' },
      { field: 'cst', header: 'cst' },
      { field: 'vatamt', header: 'Vat Amt' },
      { field: 'cstamt', header: 'cst Amt' },
      { field: 'exciseamt', header: 'excise Amt' },
      { field: 'potype', header: 'potype' },
      { field: 'discount1', header: 'Discount1' },*/
     
    ];
    this._selectedColumns = this.cols; 
  }
  ngOnInit(): void {
  
    this.selectedRowData = [];
    this.masterService.getAllLocations().subscribe(
      data => {
           this.content = JSON.parse(JSON.stringify(data.data));
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
  
  }

  editProduct(product: any) {
    this.editLocationmasterentry.emit(product);
  }
  onTableHeaderCheckboxToggle(event: any) {
  }
  print() {
    if (this.selectedRowData.length === 0) {
      alert("please select a row to print");
      return 0;
    }
    // let printContents, popupWin;
    //printContents = document.getElementById('dt').innerHTML;
    debugger;
    let dataurl = document.getElementById("qrcode");

    let imgdata = dataurl.getElementsByTagName("img")[0].getAttribute("src");
    let popupWin = window.open('', 'PRINT', 'top=0,left=0,height=100%,width=auto');
    // popupWin.document.write('<html><head><style></style></head><body><img src="../../assets/images/logo.png" class="img1" alt="cinque terre">');
    popupWin.document.write('<img src="' + imgdata + '" >');
    // popupWin.document.write('<div style="text-align:center" id="qrcode">');
    //  popupWin.document.write(`<ngx-barcode6  [bc-format]="'MSI'" [bc-value]="'123456'"  [bc-display-value]="true" >  </ngx-barcode6></div>`);
    /*  popupWin.document.write('<h3 align="center">locationName</h3><table border="0">');
      popupWin.document.write('<tr><td>Branch</td><td>Address</td><td>Location Name</td><td>Region</td></tr>');
      for(let i=0;i<=this.selectedRowData.length;i++){
      popupWin.document.write('<tr><td>'+this.selectedRowData[i].branch+'</td>');
      popupWin.document.write('<td>'+this.selectedRowData[i].address+'</td>');
      popupWin.document.write('<td>'+this.selectedRowData[i].locationName+'</td>');
      popupWin.document.write('<td>'+this.selectedRowData[i].region+'</td></tr>');
      
      }
     */
    popupWin.document.write('</body></html>');
    popupWin.document.close();
    popupWin.focus();
    // popupWin.print();
    //popupWin.close();




  }

  exportExcel() {
    if (this.selectedRowData.length === 0) {
      alert("please select a row to print");
      return 0;
    }
    import("xlsx").then(xlsx => {
      const worksheet = xlsx.utils.json_to_sheet(this.selectedRowData);
      const workbook = { Sheets: { data: worksheet }, SheetNames: ["data"] };
      const excelBuffer: any = xlsx.write(workbook, {
        bookType: "xlsx",
        type: "array"
      });
      this.saveAsExcelFile(excelBuffer, "branch master");
    });
  }

  saveAsExcelFile(buffer: any, fileName: string): void {
    import("file-saver").then(FileSaver => {
      let EXCEL_TYPE = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
      let EXCEL_EXTENSION = ".xlsx";
      const data: Blob = new Blob([buffer], {
        type: EXCEL_TYPE
      });
      FileSaver.saveAs(
        data,
        fileName + "_export_" + new Date().getTime() + EXCEL_EXTENSION
      );
    });
  }
  public openPDF(): void {
    if (this.selectedRowData.length === 0) {
      alert("please select a row to print");
      return;
    }
    let head = [['Branch', 'Address', 'Location Name', 'Region']];
    let tableData = [];
    for (let i = 0; i <= this.selectedRowData.length - 1; i++) {
      tableData.push([this.selectedRowData[i].branch, this.selectedRowData[i].address, this.selectedRowData[i].locationName, this.selectedRowData[i].region])
    }

    let doc = new jsPDF('p', 'mm', 'a4');


    doc.setFontSize(18);
    doc.text('Branch Master', 11, 8);
    doc.setFontSize(11);
    doc.setTextColor(100);


    (doc as any).autoTable({
      head: head,
      body: tableData,
      theme: 'plain',
      didDrawCell: data => {
        console.log(data.column.index)
      }
    })

    // below line for Open PDF document in new tab
    doc.output('dataurlnewwindow')

    // below line for Download PDF document  
    doc.save('myteamdetail.pdf');
  }
  @Input() get selectedColumns(): any[] {
    return this._selectedColumns;
  }

  set selectedColumns(val: any[]) {
    //restore original order
    this._selectedColumns = this.cols.filter(col => val.includes(col));
  }
}


