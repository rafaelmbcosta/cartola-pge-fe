import { Injectable} from "@angular/core";
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Currency } from '../currencies/currency';
import { CURRENCIES } from './mock-currencies';

@Injectable()
export class MockCurrencyService {
  private http: Http;

  getCurrencies(): Observable<Currency[]>{
    return Observable.of(CURRENCIES);
  }

}
