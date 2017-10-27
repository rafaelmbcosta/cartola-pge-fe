import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { SeasonScore } from './season-score';

@Injectable()
export class SeasonScoreService {
  private seasonScoreUrl = 'http://cartola-pge-api.herokuapp.com/api/v1/season_score';

  constructor(
    private http: Http,
  ) {}

  getSeasonScores(): Observable<SeasonScore[]> {
    return this.http.get(this.seasonScoreUrl)
                      .map((response: Response) => <SeasonScore[]>response.json())
  }
}
