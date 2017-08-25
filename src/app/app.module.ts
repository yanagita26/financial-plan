import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { FamilyService } from './shared/service/family/family.service';
import { IncomeService } from './shared/service/income/income.service';
import { ExpenseService } from './shared/service/expense/expense.service';
import { LifeEventService } from './shared/service/life-event/life-event.service';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'ja-jp'},
    FamilyService,
    IncomeService,
    ExpenseService,
    LifeEventService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
