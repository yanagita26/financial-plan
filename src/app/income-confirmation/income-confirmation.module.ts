import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './../shared/shared.module';

import { IncomeConfirmationRoutingModule } from './income-confirmation-routing.module';
import { IncomeConfirmationComponent } from './income-confirmation.component';
import { IncomeComponent } from './income/income.component';
import { ExpenseComponent } from './expense/expense.component';

@NgModule({
  imports: [
    CommonModule,
    IncomeConfirmationRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    IncomeConfirmationComponent,
    IncomeComponent,
    ExpenseComponent
  ]
})
export class IncomeConfirmationModule { }
