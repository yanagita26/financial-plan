import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CashFlowComponent } from './cash-flow.component';

const routes: Routes = [
  { path: '', component: CashFlowComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CashFlowRoutingModule { }
