import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
// import { League } from './league';

@Injectable()
export class SeasonScoreService {
  // private seasonScoreUrl = 'http://cartola-pge-api.herokuapp.com/api/v1/season_score';
  private seasonScoreUrl = 'http://localhost:3000/api/v1/season_score';

  constructor(
    private http: Http,
  ) {}

  getLeagues(): Observable<League[]> {
    return this.http.get(this.seasonScoreUrl)
                      .map((response: Response) => <League[]>response.json())
  }
}
