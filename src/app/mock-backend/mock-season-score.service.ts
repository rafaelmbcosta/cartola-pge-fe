import { Injectable} from "@angular/core";
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { SeasonScore } from '../season-score/season-score';
import { SEASON } from './mock-season';

@Injectable()
export class MockSeasonScoreService {
  private http: Http;

  getSeasonScores(): Observable<SeasonScore[]>{
    return Observable.of(SEASON);
  }

}
