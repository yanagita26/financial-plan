import { Injectable } from '@angular/core';
import { Human } from './human';

@Injectable()
export class FamilyService {

  family: Human[];

  constructor() {
    this.family = [];
  }

  add(human: Human): void {
    this.family.push(human);
  }


  get list(): Human[] {
    return this.family;
  }

  update(rownum: number, human: Human): void {
    this.family[rownum] = human;
  }
}
