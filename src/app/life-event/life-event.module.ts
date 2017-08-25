import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { LifeEventRoutingModule } from './life-event-routing.module';
import { LifeEventComponent } from './life-event.component';
import { FamilyAlertComponent } from './family-alert/family-alert.component';
import { LifeEventDetailComponent } from './life-event-detail/life-event-detail.component';
import { LifeEventInputComponent } from './life-event-input/life-event-input.component';
import { LifeEventListComponent } from './life-event-list/life-event-list.component';
import { LifeEventUpdateComponent } from './life-event-update/life-event-update.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    LifeEventRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    LifeEventComponent,
    FamilyAlertComponent,
    LifeEventDetailComponent,
    LifeEventInputComponent,
    LifeEventListComponent,
    LifeEventUpdateComponent
  ]
})
export class LifeEventModule { }
