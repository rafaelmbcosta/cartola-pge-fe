import { Injectable} from "@angular/core";
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { League } from '../league/league';
import { LEAGUES } from './mock-leagues';

@Injectable()
export class MockLeagueService {
  private http: Http;

  getLeagues(): Observable<League[]>{
    return Observable.of(LEAGUES);
  }

}
