import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { League } from './league';

@Injectable()
export class LeagueService {
  private leagueUrl = 'https://cartola-pge-api.herokuapp.com/api/v1/league';
  // private leagueUrl = 'http://localhost:3000/api/v1/league';

  constructor(
    private http: Http,
  ) {}

  getLeagues(): Observable<League[]> {
    return this.http.get(this.leagueUrl)
                      .map((response: Response) => <League[]>response.json())
  }
}
