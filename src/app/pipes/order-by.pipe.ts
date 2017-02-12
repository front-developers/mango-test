import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'orderBy' })

export class OrderByPipe implements PipeTransform {

  transform(array: Array<string>, prop: string, direction: boolean): Array<string> {
    array.sort((a: any, b: any) => {
      if (a[prop] < b[prop]) {
        return direction ? -1 : 1;
      } else if (a[prop] > b[prop]) {
        return direction ? 1 : -1;
      } else {
        return 0;
      }
    });
    return array;
  }
}
