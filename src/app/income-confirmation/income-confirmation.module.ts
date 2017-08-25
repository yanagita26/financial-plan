import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IncomeConfirmationRoutingModule } from './income-confirmation-routing.module';
import { IncomeConfirmationComponent } from './income-confirmation.component';
import { IncomeComponent } from './income/income.component';
import { ExpenseComponent } from './expense/expense.component';

@NgModule({
  imports: [
    CommonModule,
    IncomeConfirmationRoutingModule,
    FormsModule
  ],
  declarations: [
    IncomeConfirmationComponent,
    IncomeComponent,
    ExpenseComponent
  ]
})
export class IncomeConfirmationModule { }
