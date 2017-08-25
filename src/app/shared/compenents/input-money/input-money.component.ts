import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-money',
  templateUrl: './input-money.component.html',
  styleUrls: ['./input-money.component.css']
})
export class InputMoneyComponent implements OnInit {

  @Input()
  value: number;

  @Input()
  min: number;

  @Input()
  step: number;

  @Output()
  valueChange = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  change(value: number) {
    this.value = value;
    this.valueChange.emit(this.value);
  }

}
