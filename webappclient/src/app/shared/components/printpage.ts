import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-print-page',
  templateUrl: './printpage.html',
  styleUrls: ['./printpage.css']
})
export class PrintPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  print() {
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

}