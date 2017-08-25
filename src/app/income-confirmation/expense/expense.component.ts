import { Component, OnInit } from '@angular/core';
import { ExpenseService } from './../../shared/service/expense/expense.service';
import { Expense } from './../../shared/service/expense/expense';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html',
  styleUrls: ['./expense.component.css']
})
export class ExpenseComponent implements OnInit {

  base: Expense;
  residence: Expense;
  vehicle: Expense;
  education: Expense;
  insurance: Expense;
  another: Expense;

  constructor(
    private expenseService: ExpenseService
  ) { }

  costs = [
    {
      item: '基本生活費',
      desc: '食費、水道光熱費、通信費、日用雑貨費など',
      monthly: 0,
      suddenly: 0
    },
    {
      item: '住居関連費',
      desc: '住宅ローン、管理費、積立金、固定資産税など',
      monthly: 0,
      suddenly: 0
    },
    {
      item: '車両費',
      desc: '駐車場代、ガソリン代、自動車税など',
      monthly: 0,
      suddenly: 0
    },
    {
      item: '教育費',
      desc: '学校教育費、塾代、習い事の費用など',
      monthly: 0,
      suddenly: 0
    },
    {
      item: '保険料',
      desc: '家族全員の保険料',
      monthly: 0,
      suddenly: 0
    },
    {
      item: 'その他の支出',
      desc: 'レジャー費、交際費、冠婚葬祭費など',
      monthly: 0,
      suddenly: 0
    }
  ];

  ngOnInit() {
    this.base = this.expenseService.base;
    this.residence = this.expenseService.residence;
    this.vehicle = this.expenseService.vehicle;
    this.education = this.expenseService.education;
    this.insurance = this.expenseService.insurance;
    this.another = this.expenseService.another;
  }

  calcTotalExpenses() {
    let sums = 0;
    for (const cost of this.costs) {
      const sum = cost.monthly * 12 + cost.suddenly;
      sums += sum;
    }
    return sums;
  }
}

