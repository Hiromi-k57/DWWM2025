import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'typeColor'
})
export class TypeColorPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
