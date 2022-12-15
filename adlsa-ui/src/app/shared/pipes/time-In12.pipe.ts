import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'TimeTo12Hours'
})
export class TimeTo12HoursPipe implements PipeTransform {
  transform(timeIN24: string): string {
    let timeAM = 'صباحاً';
    let timePM = 'مساءً';
    var time24To12 = (time: string): string => {
      let date = new Date(`1955-11-05T${time}Z`)
        .toLocaleTimeString('en-IT', {
          timeZone: 'UTC',
          hour12: !0,
          hour: 'numeric',
          minute: 'numeric'
        })
        .replace('PM', timePM)
        .replace('AM', timeAM);
      return `${date}`;
    };
    return time24To12(timeIN24);
  }
}