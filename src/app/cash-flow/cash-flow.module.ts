import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CashFlowRoutingModule} from './cash-flow-routing.module';

import { CashFlowComponent } from './cash-flow.component';
import {SharedModule} from '../shared/shared.module';
import { FlowTableComponent } from './flow-table/flow-table.component';
import { BalanceSheetService } from './../balance-sheet/shared/balance-sheet.service';

@NgModule({
  imports: [
    CommonModule,
    CashFlowRoutingModule,
    SharedModule
  ],
  declarations: [
    CashFlowComponent,
    FlowTableComponent
  ],
  providers: [
    BalanceSheetService
  ]
})
export class CashFlowModule { }
