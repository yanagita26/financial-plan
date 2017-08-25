import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-family-detail',
  templateUrl: './family-detail.component.html',
  styleUrls: ['./family-detail.component.css']
})
export class FamilyDetailComponent implements OnInit {

  @Input()
  name: string;

  @Input()
  relationship: string;

  @Input()
  birthday: Date;

  @Input()
  rownum: number;

  myVar = false;

  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.myVar = true;
  }

}
