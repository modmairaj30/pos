import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { QueryList, ViewChildren } from '@angular/core';
import { Observable } from 'rxjs';
import jsPDF from 'jspdf';
//import * as jsPDF from 'jspdf';
import 'jspdf-autotable';

import html2canvas from 'html2canvas';

import { UserManagementService } from 'src/app/layout/service';
import { MessageService } from 'primeng/api';


@Component({
  selector: 'app-userhistory',
  templateUrl: './userhistory.component.html',
  styleUrls: ['./user.scss'],
  providers: [MessageService]
})
export class UserHistoryComponent implements OnInit {
  selectedRowData: any[];
  user: any = [];
  loading:boolean=false;
  content: any[] = [];
  public columnNames: string[] = ["user", "Code"]
  base64: any;
  @Output()
  edituserentry = new EventEmitter();

  constructor(private userManagementService: UserManagementService, private messageService: MessageService) {
  }
  ngOnInit(): void {
    this.selectedRowData = [];
    this.base64 = "data:image/jpeg;base64,";
    this.userManagementService.getUsers().subscribe(
      data => {

        this.content = JSON.parse(JSON.stringify(data.data));
        for (let i = 0; i < this.content.length; i++) {
      //console.log(this.content[i].picByte);
        this.content[i].picByte = this.base64+this.content[i].picByte;
        }
       
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );


    //  this.loadEmployees()
  }

  editProduct(product: any) {
    this.edituserentry.emit(product);
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
    let dataurl = document.getElementById("qrcode");

    let imgdata = dataurl.getElementsByTagName("img")[0].getAttribute("src");
    let popupWin = window.open('', 'PRINT', 'top=0,left=0,height=100%,width=auto');
    popupWin.document.write('<html><head><style></style></head><body><img src="../../assets/images/logo.png" class="img1" alt="cinque terre">');
    popupWin.document.write('<img src="' + imgdata + '" >');
    popupWin.document.write('<h3 align="center">user Details</h3><table border="0">');
    popupWin.document.write('<tr><td>user</td><td>Address</td><td>Location Name</td><td>Region</td></tr>');
    for (let i = 0; i <= this.selectedRowData.length; i++) {
      popupWin.document.write('<tr><td>' + this.selectedRowData[i].user + '</td>');
      popupWin.document.write('<td>' + this.selectedRowData[i].address + '</td>');
      popupWin.document.write('<td>' + this.selectedRowData[i].locationName + '</td>');
      popupWin.document.write('<td>' + this.selectedRowData[i].region + '</td></tr>');
    }

    popupWin.document.write('</table></body></html>');
    popupWin.document.close();
    popupWin.focus();
    popupWin.print();
    popupWin.close();




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
      this.saveAsExcelFile(excelBuffer, "user master");
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
    let head = [['user', 'Address', 'Location Name', 'Region']];
    let tableData = [];
    for (let i = 0; i <= this.selectedRowData.length - 1; i++) {
      // 
      /*var temp = [];
      temp[0] = this.content[i].user == null ? "" : this.content[i].user;
            temp[1] = this.content[i].address == null ? "" :this.content[i].address;
            temp[2] = this.content[i].locationName == null ? "" : this.content[i].locationName;
            temp[3] = this.content[i].region == null ? "" :this.content[i].region;
            temp[4] = this.content[i].convLife == null ? "" : this.content[i].convLife;
            temp[5] = this.content[i].tapHoleLife == null ? "" :this.content[i].tapHoleLife;*/
      tableData.push([this.selectedRowData[i].user, this.selectedRowData[i].address, this.selectedRowData[i].locationName, this.selectedRowData[i].region])
    }

    let doc = new jsPDF('p', 'mm', 'a4');


    doc.setFontSize(18);
    doc.text('user Master', 11, 8);
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

}


