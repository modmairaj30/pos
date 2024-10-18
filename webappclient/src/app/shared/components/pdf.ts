import { Component, OnInit, Input } from '@angular/core';
import jsPDF from 'jspdf';
//import * as jsPDF from 'jspdf';
import 'jspdf-autotable';

import html2canvas from 'html2canvas';
import { MessageService } from 'primeng/api';
import { ImageConstant } from 'src/app/image-constants';
import { Image1Constant } from 'src/app/image1-constants';


@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.html',
 
})
export class ExportToPdfComponent implements OnInit {

  constructor(private messageService: MessageService) { }

  ngOnInit() {
  }
  @Input()
  locationId:number;
  @Input()
  head: [];
  @Input()
  body: [];
  @Input()
  foot: [];
  @Input()
  dhead: [];
  @Input()
  title:string="file";
  @Input()
  dbody : [];
  @Input()
  dfoot : [];
  @Input()
  count:number; 
  public openPDF(): void {
    debugger;
    if(this.count==0){
    this.showFail("Select a  row to print.");
    return;
    }
    /*
    else if(this.count>1){
      this.showFail("More than one row is selected,Please select single row to print.");
      return;
    }*/
   
    let doc = new jsPDF('p', 'mm', 'a4');
     doc.setProperties({
    title: this.title
    });
    if(this.locationId==11 || this.locationId==15){
      doc.addImage(Image1Constant.imageData, 'png', 15, 3, 20, 20);
    }
    else{
    doc.addImage(ImageConstant.imageData, 'png', 15, 3, 20, 20);
  }
    doc.setTextColor(0,0,0);
    doc.setFontSize(14);
    doc.text('MAHBOOB STORE',55,13,  { align: 'justify', });
    doc.setFontSize(12);
    doc.text(this.title, 70, 18, { align: 'justify', });
   // doc.setTextColor(100);
    doc.setTextColor(0,0,0);
    
    (doc as any).autoTable({
       body: this.body,
      theme: 'plain',
      startY: 28,
      
      bodyStyles:{
        valign: 'middle',
        halign : 'left'
      },
      didDrawCell: data => {
      //  console.log(data.column.index)
      }
    });
    doc.setTextColor(0,0,0);
    (doc as any).autoTable({
      head: this.dhead,
      body: this.dbody,
      foot:this.dfoot,
      showFoot:'lastPage',
      theme: 'grid',
      startY: 34,
      styles: {overflow: 'linebreak', columnWidth: '100', font: 'arial', fontSize: 12, cellPadding: 0.5, overflowColumns: 'linebreak'},
    //  styles: { "overflow": "linebreak", "cellWidth": "wrap", "rowPageBreak": "auto", "halign": "justify", "fontSize": "8", "lineColor": "100", "lineWidth": ".25" }, 
     // styles: { overflow: 'linebreak',fontSize: 8,cellPadding: 0.5, cellWidth: 'wrap' },
      bodyStyles: {lineColor: [0, 0, 0],text: { cellWidth: 'wrap' }},
      headStyles: {fillColor: [255,255,255],lineColor: [0, 0, 0],lineWidth: 0.3,textColor: [0, 0, 0],theme: 'grid', valign: 'middle',halign : 'center',text: { cellWidth: 'wrap' }},
     footStyles: {fillColor: [255,255,255],lineColor: [0, 0, 0],lineWidth: 0.3,textColor: [0, 0, 0],halign: 'right',valign: 'middle', text: { cellWidth: 'wrap' },  },
     columnWidth: 'wrap',
     columnStyles: {text: { cellWidth: 'wrap' },
      0:{ halign: 'right'},
      3: {halign: 'center'},
      4: { halign: 'right'},
      5: {halign: 'right'},
      6: {halign: 'center'}
    },
    /*
     styles: {
      cellPadding: 0.5,
      fontSize: 8,
      cellWidth: 'wrap',
      rowPageBreak: 'auto',
      halign: 'justify'
  },*/
       
    didDrawCell: data => {
       // console.log(data.column.index)
      },
      });
      (doc as any).autoTable({
        body: this.foot,
       theme: 'plain',
        bodyStyles:{
         valign: 'middle',
         halign : 'right'
       },
       didDrawCell: data => {
       //  console.log(data.column.index)
       }
     });
     //below line for Open PDF document in new tab
     window.open(URL.createObjectURL(doc.output("blob")))
    
    // below line for Open PDF document in new tab
    //doc.output('dataurlnewwindow')
    //var output = doc.output();
    
    // below line for Download PDF document  
  //  doc.save(this.title+'.pdf');
  }
  
  showFail(value:string) {
    this.messageService.add({ key: 'error', severity: 'info', summary: 'info', detail:value });
  }
}