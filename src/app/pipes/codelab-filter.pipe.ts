import { Pipe, PipeTransform } from '@angular/core';

import {AbstractControl} from "@angular/forms";

@Pipe({
  name: 'codelabFilter'
})
export class CodelabFilterPipe implements PipeTransform {

  transform(codelabList: AbstractControl[], filterText: string, test: string): AbstractControl[] {
    if(!filterText){
      return codelabList;
    }
    if(!codelabList) return []
    return codelabList
      .filter(codelab => codelab.value[test].replace('_', ' ').toLowerCase().includes(filterText.toLowerCase()));
  }
}
