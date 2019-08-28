import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { DisputeMonth } from './dispute-month';

@Injectable()
export class DisputeMonthService {
  private disputeUrl = 'https://cartola-pge-api.herokuapp.com/api/v1/dispute_months';

  constructor(
    private http: Http,
  ) {}

  getDisputeMonths(): Observable<DisputeMonth[]> {
    return this.http.get(this.disputeUrl)
                      .map((response: Response) => <DisputeMonth[]>response.json())
  }
}
