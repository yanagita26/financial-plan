import { Component, OnInit, Input } from '@angular/core';
import { Human } from './../../shared/service/family/human';
import { LifeEvent } from './../../shared/service/life-event/life-event';

@Component({
  selector: 'app-life-event-detail',
  templateUrl: './life-event-detail.component.html',
  styleUrls: ['./life-event-detail.component.css']
})
export class LifeEventDetailComponent implements OnInit {

  @Input()
  event: LifeEvent;

  @Input()
  family: Human[];

  edit: boolean;

  constructor() { }

  ngOnInit() {
    this.edit = false;
  }
  ageOfYear(birthday: Date, year: number = new Date().getFullYear()): number {
    return year - birthday.getFullYear();
  }

  changeEvent() {
    this.edit = false;
  }

  onClick(): void {
    this.edit = true;
  }
}
