import { Injectable} from "@angular/core";
import { DISPUTE_MONTHS} from "./mock-dispute-months";
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { Month } from '../award/main/monthly/month';
import { MONTHLY } from './mock-monthly';

import { Championship } from '../award/main/championship/championship';
import { CHAMPIONSHIP } from './mock-championship';

@Injectable()
export class MockAwardService {
  private http: Http;

  getMonths(): Observable<Month[]>{
    return Observable.of(MONTHLY);
  }

  getChampionship(): Observable<Championship>{
    return Observable.of(CHAMPIONSHIP);
  }
}
