import { Component, OnInit } from '@angular/core';
import { Human } from './../shared/service/family/human';
import { FamilyService } from './../shared/service/family/family.service';
import { LifeEvent } from './../shared/service/life-event/life-event';
import { LifeEventService } from './../shared/service/life-event/life-event.service';

@Component({
  selector: 'app-life-event',
  templateUrl: './life-event.component.html',
  styleUrls: ['./life-event.component.css']
})
export class LifeEventComponent implements OnInit {

  family: Human[];
  lifeEvents: LifeEvent[];

  constructor(
    private familyService: FamilyService,
    private lifeEventService: LifeEventService
  ) { }

  ngOnInit() {
    this.family = this.familyService.list;
    this.lifeEvents = this.lifeEventService.list;
  }

  isEmptyFamily(): boolean {
    return this.family.length === 0;
  }

}
