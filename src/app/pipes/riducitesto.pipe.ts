import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'riducitesto'
})
export class RiducitestoPipe implements PipeTransform {

  transform(value: string, max:number = 50): string {
    if(value.length > max )
      return value.slice(0,max)+"..."
    else
      return value;
  }

}
