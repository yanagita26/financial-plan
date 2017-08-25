import { Component, OnInit, EventEmitter, Input } from '@angular/core';
import { Human } from './../../shared/service/family/human';
import { NgForm } from '@angular/forms';
import { LifeEventService } from './../../shared/service/life-event/life-event.service';
import * as UUID from 'uuid';
import { LifeEvent } from './../../shared/service/life-event/life-event';

@Component({
  selector: 'app-life-event-input',
  templateUrl: './life-event-input.component.html',
  styleUrls: ['./life-event-input.component.css']
})
export class LifeEventInputComponent implements OnInit {

  @Input()
  family: Human[];

  constructor(
    private lifeEventService: LifeEventService
  ) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm): void {
    const newEvent = {
      uuid: UUID.v4(),
      year: form.value.year,
      familyPerson: form.value.familyPerson,
      eventName: form.value.eventName,
      money: form.value.money,
      timestamp: new Date()
    };

    this.lifeEventService.add(newEvent);
    form.reset();
  }

}
