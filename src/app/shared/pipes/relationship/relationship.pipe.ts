import { Pipe, PipeTransform } from '@angular/core';
import { Relationship } from './../../service/family/relationship';

@Pipe({
  name: 'relationshipValue'
})
export class RelationshipPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return new Relationship().value(value);
  }

}
