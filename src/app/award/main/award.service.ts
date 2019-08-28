import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Championship } from './championship/championship';
import { Month } from './monthly/month';

@Injectable()
export class AwardService {
  private awardUrl = 'https://cartola-pge-api.herokuapp.com/api/v1/';

  constructor(
    private http: Http,
  ) {}

  getMonths(): Observable<Month[]> {
    return this.http.get(this.awardUrl+'monthly')
                      .map((response: Response) => <Month[]>response.json())
  }

  getChampionship(): Observable<Championship> {
    return this.http.get(this.awardUrl+'championship')
                      .map((response: Response) => <Championship>response.json())
  }
}
