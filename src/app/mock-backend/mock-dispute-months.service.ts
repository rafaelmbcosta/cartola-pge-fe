import { Injectable} from "@angular/core";
import { DISPUTE_MONTHS} from "./mock-dispute-months";
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { DisputeMonth } from '../dispute-month/dispute-month';

@Injectable()
export class MockDisputeMonthsService {
  private http: Http;

  getDisputeMonths(): Observable<DisputeMonth[]>{
    return Observable.of(DISPUTE_MONTHS);
  }
}
