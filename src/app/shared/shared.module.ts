import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RelationshipPipe } from './pipes/relationship/relationship.pipe';
import { InputMoneyComponent } from './compenents/input-money/input-money.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    RelationshipPipe,
    InputMoneyComponent
  ],
  exports: [
    RelationshipPipe
  ]
})
export class SharedModule { }
