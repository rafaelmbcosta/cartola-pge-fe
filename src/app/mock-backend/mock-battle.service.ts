import {Injectable} from "@angular/core";
import {BATTLES} from "./mock-battles";
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Battles } from '../battle/battles';

@Injectable()
export class MockBattleService {
  private http: Http;

  getBattles(): Observable<Battles[]>{
    return Observable.of(BATTLES);
  }
}
