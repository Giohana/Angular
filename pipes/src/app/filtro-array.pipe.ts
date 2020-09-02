import { Pipe, PipeTransform } from '@angular/core';


// n/ao pode fazer em projeto reais
// pipe puro - não olha as modificções/atualizações
@Pipe({
  name: 'filtroArray'
})
export class FiltroArrayPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {

    if(value.length === 0 || args === undefined){
      return value;
    }

    let filter = args.toLocaleString().toLocaleLowerCase();
    return value.filter(
      v => v.toLocaleLowerCase().indexOf(filter) != -1
    );
  }

}
