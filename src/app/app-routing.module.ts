
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'balance-sheet', loadChildren: './balance-sheet/balance-sheet.module#BalanceSheetModule'},
  { path: 'cash-flow', loadChildren: './cash-flow/cash-flow.module#CashFlowModule'},
  { path: 'family', loadChildren: './family/family.module#FamilyModule' },
  { path: 'income-confirmation', loadChildren: './income-confirmation/income-confirmation.module#IncomeConfirmationModule'},
  { path: 'life-event', loadChildren: './life-event/life-event.module#LifeEventModule'},
  { path: '', redirectTo: 'family', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
