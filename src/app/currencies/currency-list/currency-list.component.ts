import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../currency.service';
import { Currency } from '../currency';
import { MockCurrencyService } from '../../mock-backend/mock-currency.service';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-currency-list',
  templateUrl: './currency-list.component.html',
  styleUrls: ['./currency-list.component.css'],
  providers: [ CurrencyService, MockCurrencyService ]
})
export class CurrencyListComponent implements OnInit {
  currencies: Currency[];
  errorMessage: string;
  active: number;

  constructor(
    private currencyService: CurrencyService
  ) { }

  ngOnInit() {
    let timer = Observable.timer(0, 5* 60*1000)
    timer.subscribe(() => this.getCurrencies());
  }

  getCurrencies(){
    this.currencyService.getCurrencies()
      .subscribe(
        currencies => this.currencies = currencies,
        error => this.errorMessage = <any>error
      );
  }

  tag(id){
    return "pills_"+id;
  }

  label(id){
    return "tab_"+id
  }

  setActive(id){
    this.active = id;
  }

  isActive(id){
    if (id == this.active){
      return true;
    }
    if (this.active == null){
      this.active = id
      return true;
    }
  }
}
