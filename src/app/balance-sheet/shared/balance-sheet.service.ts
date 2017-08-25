import { Injectable } from '@angular/core';
import { BalanceSheet } from './balance-sheet';
import { ASSETS } from './mock-assets';
import { LIABLITIES } from './mock-liabilities';

@Injectable()
export class BalanceSheetService {

  constructor() { }

  getAssets(): Promise<BalanceSheet[]> {
    return Promise.resolve(ASSETS);
  }

  getLiabilities(): Promise<BalanceSheet[]> {
    return Promise.resolve(LIABLITIES);
  }

  getMoneyTotal(items): number {
    let sum = 0;
    items.forEach(items => {
      sum += isNaN(items.money) ? 0 : Number(items.money);
    });

    return sum;
  }

}
