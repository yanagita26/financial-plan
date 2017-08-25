import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RelationshipPipe } from './pipes/relationship/relationship.pipe';
import { InputMoneyComponent } from './compenents/input-money/input-money.component';
import { PageHeaderComponent } from './compenents/page-header/page-header.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    RelationshipPipe,
    InputMoneyComponent,
    PageHeaderComponent
  ],
  exports: [
    RelationshipPipe,
    PageHeaderComponent
  ]
})
export class SharedModule { }
