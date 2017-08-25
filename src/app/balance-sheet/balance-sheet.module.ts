import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

import { BalanceSheetRoutingModule } from './balance-sheet-routing.module';
import { BalanceSheetComponent } from './balance-sheet.component';
import { AssetComponent } from './asset/asset.component';
import { LiabilityComponent } from './/liability/liability.component';


@NgModule({
  imports: [
    CommonModule,
    BalanceSheetRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    BalanceSheetComponent,
    AssetComponent,
    LiabilityComponent
  ]
})
export class BalanceSheetModule { }
