import { Component, OnInit } from '@angular/core';
import { BalanceSheet } from './../shared/balance-sheet';
import { BalanceSheetService } from './../shared/balance-sheet.service';

@Component({
  selector: 'app-liability',
  templateUrl: './liability.component.html',
  styleUrls: [
    './liability.component.css',
    '../shared/shared.css'
  ]
})
export class LiabilityComponent implements OnInit {

  liabilities: BalanceSheet[];

  constructor(
    private balanceSheetService: BalanceSheetService
  ) { }

  getLiabilities(): void {
    this.balanceSheetService.getLiabilities().then(liabilities => this.liabilities = liabilities);
  }

  calcLiabilityTotal(): number {
    return this.balanceSheetService.getMoneyTotal(this.liabilities);
  }

  ngOnInit() {
    this.liabilities = [];
    this.getLiabilities();
  }

}
