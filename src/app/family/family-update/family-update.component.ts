import { concat } from 'rxjs/operator/concat';
import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FamilyService } from './../../shared/service/family/family.service';
import { Human } from './../../shared/service/family/human';
import { Relationship } from './../../shared/service/family/relationship';

@Component({
  selector: 'app-family-update',
  templateUrl: './family-update.component.html',
  styleUrls: ['./family-update.component.css']
})
export class FamilyUpdateComponent implements OnInit {

  human: Human;
  relationships: any;

  @Input()
  rownum: number;

  @Input()
  name: string;

  @Input()
  relationship: string;

  @Input()
  birthday: Date;

  constructor(
    private familyService: FamilyService
  ) { }

  ngOnInit() {
    this.relationships = new Relationship().get();
  }

  public onSubmit(form: NgForm): void {

    const human: Human = {
      name: form.value.name,
      relationship: form.value.relationship,
      birthday: new Date(form.value.birthday)
    };

    this.familyService.update(this.rownum, human);

    form.reset();
  }

  get birthdayFormat() {
    return this.birthday.toISOString().substring(0, 10);
  }

}
