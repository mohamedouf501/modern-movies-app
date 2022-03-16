import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tirm'
})
export class TirmPipe implements PipeTransform {

  transform(overview: string, count: number): any {
    
   return  overview.split(" ").splice(0 , count).join(" ")


  }

}
