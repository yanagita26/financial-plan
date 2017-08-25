import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Human } from './../../shared/service/family/human';
import { LifeEvent } from './../../shared/service/life-event/life-event';
import { LifeEventService } from './../../shared/service/life-event/life-event.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-life-event-update',
  templateUrl: './life-event-update.component.html',
  styleUrls: ['./life-event-update.component.css']
})
export class LifeEventUpdateComponent implements OnInit {

  @Input() event: LifeEvent;
  @Input() family: Human[];
  @Output() submitLifeEvent = new EventEmitter<LifeEvent>();

  constructor(private lifeEventService: LifeEventService) { }

  ngOnInit() {}

  onSubmit(form: NgForm): void {
    this.submitLifeEvent.emit();
  }

}
