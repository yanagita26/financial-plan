import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Human } from './../../shared/service/family/human';
import { Relationship } from './../../shared/service/family/relationship';
import { FamilyService } from './../../shared/service/family/family.service';

@Component({
  selector: 'app-family-input',
  templateUrl: './family-input.component.html',
  styleUrls: ['./family-input.component.css']
})
export class FamilyInputComponent implements OnInit {

  human: Human;
  relationships: any;

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

    this.familyService.add(human);

    form.reset();
  }
}
