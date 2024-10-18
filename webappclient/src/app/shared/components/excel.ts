import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-excel',
  templateUrl: './excel.html',
  styleUrls: ['./printpage.css']
})
export class ExportToExcelComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  exportExcel(selectedRowData:any) {
   
    import("xlsx").then(xlsx => {
      const worksheet = xlsx.utils.json_to_sheet(selectedRowData);
      const workbook = { Sheets: { data: worksheet }, SheetNames: ["data"] };
      const excelBuffer: any = xlsx.write(workbook, {
        bookType: "xlsx",
        type: "array"
      });
      this.saveAsExcelFile(excelBuffer, "master");
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
  
  

  
}