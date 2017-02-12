import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'search' })

export class SearchPipe implements PipeTransform {

  transform(array: Array<string>, searchStr: string, excludeProps: Array<string>): Array<string> {
    const excludeArr = excludeProps && excludeProps.length ? excludeProps : [];
    return searchStr
            ? array.filter((item: any) => {
              for (const prop in item) {
                if (item.hasOwnProperty(prop) && excludeArr.indexOf(prop) === -1) {
                  if (item[prop].toString().toLowerCase().indexOf(searchStr) !== -1) {
                    return true;
                  }
                }
              }
            })
            : array;
  }
}
