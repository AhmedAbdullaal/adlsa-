import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dayInArabic'
})
export class dayInArabicPipe implements PipeTransform {
  transform(day: string): string {
    let map = new Map([
      ['sunday', 'الأحد'],
      ['monday', 'الأثنين'],
      ['tuesday', 'الثلاثاء'],
      ['wednesday', 'الأربعاء'],
      ['thursday', 'الخميس'],
      ['friday', 'الجمعه'],
      ['saturday', 'السبت']
    ]);
    map.forEach((value, key) => {
      if (day == key) day = value;
    });
    return day;
  }
}
