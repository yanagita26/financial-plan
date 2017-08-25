import { Component, OnInit } from '@angular/core';
import { IncomeService } from './../../shared/service/income/income.service';
import { Income } from './../../shared/service/income/income';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.css']
})
export class IncomeComponent implements OnInit {

  husband: Income;
  wife: Income;

  constructor(
    private incomeService: IncomeService
  ) { }

  ngOnInit() {
    this.husband = this.incomeService.husband;
    this.wife = this.incomeService.wife;
  }

  calcTotalAfterTaxIncome() {
    return this.incomeService.totalAfterTaxIncome;
  }
}
