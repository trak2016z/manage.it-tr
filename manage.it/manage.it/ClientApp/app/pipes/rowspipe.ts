import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'rows' })
export class RowsPipe implements PipeTransform {
    transform(val: Array<any>, cols:number) {
        var arrayOfArrays = new Array<any>();

        if(val){
            while(val.length){
                arrayOfArrays.push(val.splice(0, cols || 4));
            }
        }

        return arrayOfArrays;
    }
}