import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'typeColor'
})
export class TypeColorPipe implements PipeTransform {

//Value wa type no hidari part
  transform(value: string): string {

    let color ="";
    switch(value){
      case "dessert":
        color="pink";
        break;
      case "plat":
        color ="brown";
        break;
      case "entrée":
        color="green";
        break;
    }
    return color;
}
}
