import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortText'
})
export class ShortTextPipe implements PipeTransform {

  transform(value: string): string {
    if (value.length > 100) {
      return value.substr(0, 100) + '...';
    } else {
      return value;
    }
  }
}
