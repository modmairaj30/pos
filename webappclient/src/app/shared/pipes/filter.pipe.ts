import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], searchText: number, fieldName: string): string {

    if (!items) { return ""; }

    // return the original array if search text is empty
    if (!searchText) { return ""; }

    // convert the searchText to lower case
   // searchText = searchText.toLowerCase();
   debugger;
   let result = items.filter(s => s["id"]==searchText);
    return result[0][fieldName];
  
    
    // retrun the filtered array
   
   }
}