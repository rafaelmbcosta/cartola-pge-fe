import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Battles } from './battles';

@Injectable()
export class BattlesService {
  // private battleUrl = 'http://cartola-pge-api.herokuapp.com/api/v1/battles';
  private battleUrl = 'http://localhost:3000/api/v1/battles';

  constructor(
    private http: Http,
  ) {}

  getBattles(): Observable<Battles[]> {
    return this.http.get(this.battleUrl)
                      .map((response: Response) => <Battles[]>response.json())
  }
}
