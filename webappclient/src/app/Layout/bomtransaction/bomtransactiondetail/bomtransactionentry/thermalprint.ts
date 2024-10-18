import { Component, ElementRef, Input } from "@angular/core";
import { create, SheetsRegistry } from "jss";
import preset from "jss-preset-default";
import { BillDetailPrint, BomTransactionDetail, Bomtransaction } from "src/app/layout/domain";

const jss = create(preset());
const styles = {
  singleLine: `
    margin-top: 0.25rem;
    margin-bottom: 0.25rem;
    white-space: pre-wrap;
  `,
  singleLine1: `
    margin-top: 0.25rem;
    margin-bottom: 0.25rem;
    white-space: pre-wrap;
  `,
  printAreaContainer: `
    padding: 8px;
  `,
  fontMono: {
    fontFamily: "monospace"
  },
  textCenter: {
    textAlign: "center"
  },
  textRight: {
    textAlign: "right"
  },
  textLeft: {
    textAlign: "left"
  },
  fontBold: {
    fontWeight: "bold"
  },
  grid3Col: {
    display: "grid",
    columnGap: "5px",
    gridTemplateColumns: "1fr auto auto"
  },
  gridBorderSolid: `
    border-bottom: 1px solid;
  `,
  gridBorderDashed: `
    border-bottom: 1px dashed;
  `,
  gridBorderDouble: `
    border-bottom: 3px double;
  `,
  gridBorder: `
    grid-column: 1 / -1;
    margin: 4px 0;
  `,
  nowrap: {
    overflow: "hidden",
    textOverflow: "clip",
    whiteSpace: "nowrap"
  },
  colSpan2: {
    gridColumn: "span 2 / span 2"
  },
  maxLine2: {
    maxHeight: "30px",
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "-webkit-box",
    "-webkit-line-clamp": 2,
    "-webkit-box-orient": "vertical"
  }
};
const sheets = new SheetsRegistry();
const sheet = jss.createStyleSheet(styles);
sheets.add(sheet);
const { classes } = sheet.attach();

@Component({
  selector: "thermalprint",
  templateUrl: "./thermalprint.html"
})
export class ThermalPrint {
  @Input()
  width: "80mm";
  classes = classes;

  @Input()
  public bomtransaction = new Bomtransaction();

  
  public bill= new Array();

  constructor(private elementRef: ElementRef) {
    //this.setvalues();
  }
  ngOnInit() {

    this.setvalues();
  }
  setvalues(){
    debugger;
    if(this.bomtransaction.bomDetailList==undefined){
      return;
    }
    for (let i = 0; i < this.bomtransaction.bomDetailList.length; i++) {
      let obj = new BillDetailPrint();
     if (this.bomtransaction.bomDetailList[i].itemName.length<10) {
     let s=this.space1(this.bomtransaction.bomDetailList[i].itemName.length);
     obj.itemName=this.bomtransaction.bomDetailList[i].itemName+s ;
     obj.sno=(i+1)+"";
     //obj.id=this.bomtransaction.bomDetailList[i].id+"";
     //obj.baseId=this.bomtransaction.bomDetailList[i].baseId+"";
     //obj.itemId=this.bomtransaction.bomDetailList[i].itemId+"";
    let qty = this.space2(this.bomtransaction.bomDetailList[i].qty.toString().length);
    let rate = this.space3(this.bomtransaction.bomDetailList[i].rate.toString().length)
    let amount = this.space3(this.bomtransaction.bomDetailList[i].amount.toString().length)
     obj.qty=this.bomtransaction.bomDetailList[i].qty+qty;
     obj.rate=this.bomtransaction.bomDetailList[i].rate+rate;
     obj.amount=this.bomtransaction.bomDetailList[i].amount+amount;
     //obj.uom=this.bomtransaction.bomDetailList[i].uom+"";
     }
   else{
      obj.itemName=this.bomtransaction.bomDetailList[i].itemName+"";
      obj.sno=(i+1)+"";
      //obj.id=this.bomtransaction.bomDetailList[i].id+"";
      //obj.baseId=this.bomtransaction.bomDetailList[i].baseId+"";
      //obj.itemId=this.bomtransaction.bomDetailList[i].itemId+"";
      obj.qty=this.bomtransaction.bomDetailList[i].qty+"";
      obj.rate=this.bomtransaction.bomDetailList[i].rate+"";
      obj.amount=this.bomtransaction.bomDetailList[i].amount+"";
      //obj.uom=this.bomtransaction.bomDetailList[i].uom+"";
    }

   debugger;
    this.bill[i]=obj;
    /*if (this.bomtransaction.bomDetailList[i].qty.toString.length<4) {
      let q=this.space2(this.bomtransaction.bomDetailList[i].qty.toString.length);
      this.bomtransaction.bomDetailList[i].qty=this.bomtransaction.bomDetailList[i].qty.toString.length+q ;
     }
     if (this.bomtransaction.bomDetailList[i].rate.toString.length<7) {
      let r=this.space3(this.bomtransaction.bomDetailList[i].rate.toString.length);
      this.bomtransaction.bomDetailList[i].rate=this.bomtransaction.bomDetailList[i].rate.toString.length+r ;
     }
     if (this.bomtransaction.bomDetailList[i].amount.toString.length<7) {
      let a=this.space3(this.bomtransaction.bomDetailList[i].amount.toString.length);
      this.bomtransaction.bomDetailList[i].amount=this.bomtransaction.bomDetailList[i].amount.toString.length+a ;
     }*/
     }
  }
space1(length): string{
let str="";
let count = 10-length;
for(let i=0;i<count;i++)
{
    str = str +" ";
}
return str;
}

space2(length): string{
  let str="";
  let count = 4-length;
  for(let i=0;i<count;i++)
  {
      str = str +" ";
  }
  return str;
  }
  space3(length): string{
    let str="";
    let count = 7-length;
    for(let i=0;i<count;i++)
    {
        str = str +" ";
    }
    return str;
    }
  print(): void {
   //this.bill= this.bomtransaction.bomDetailList;
   this.bill;
debugger;
    const tpm = new ThermalPrinterService(this.width);
    const styles = sheets.toString();
    console.log(this.elementRef.nativeElement.innerHTML);
    console.log(styles);
    tpm.setStyles(styles);
    tpm.addRawHtml(this.elementRef.nativeElement.innerHTML);
    tpm.print();
  }
}

class ThermalPrinterService {
  printContent = ``;
  cssStyles = ``;

  constructor(private paperWidth: "80mm" | "5800mm") {}

  addRawHtml(htmlEl) {
    this.printContent += `\n${htmlEl}`;
  }

  addLine(text) {
    this.addRawHtml(`<p>${text}</p>`);
  }

  addLineWithClassName(className, text) {
    this.addRawHtml(`<p class="${className}">${text}</p>`);
  }

  addEmptyLine() {
    this.addLine(`&nbsp;`);
  }

  addLineCenter(text) {
    this.addLineWithClassName("text-center", text);
  }

  setStyles(cssStyles) {
    this.cssStyles = cssStyles;
  }

  print() {
     
    const printerWindow = window.open(``, `_blank`);
    printerWindow.document.write(`
    <!DOCTYPE html>
    <html>
    
    <head>
      <title>Print</title>
      <style>
        html { padding: 0; margin: 0; width: ${this.paperWidth}; }
        body { margin: 0; }
        ${this.cssStyles}
      </style>
      <script>
        window.onafterprint = event => {
          window.close();
        };
      </script>
    </head>

    <body>
      ${this.printContent}
    </body>
    
    </html>
    
    `);

    printerWindow.document.close();
    printerWindow.focus();
    printerWindow.print();
    // mywindow.close();
  }
}
