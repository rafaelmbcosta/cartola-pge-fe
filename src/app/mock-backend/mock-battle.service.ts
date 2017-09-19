import {Injectable} from "@angular/core";
// import {MockBackend, MockConnection} from "@angular/http/testing";
import {BATTLES} from "./mock-battles";
// import {ResponseOptions, Response} from "@angular/http";
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Battles } from '../battle/battles';

@Injectable()
export class MockBattleService {
  private http: Http;

  getBattles(): Observable<Battles[]>{
    return Observable.of(BATTLES);
  }
  // constructor(
  //     private backend: MockBackend
  // ) {
  //   this.backend.connections.subscribe((c: MockConnection) => {
  //     const battleUrl = 'http://localhost:3000/api/v1/battles';
  //
  //     console.log(c.request.url);
  //
  //     if (c.request.url === battleUrl && c.request.method === 0) {
  //         let res = new Response(new ResponseOptions({
  //           body: JSON.stringify(BATTLES)
  //       }));
  //       c.mockRespond(res);
  //     }
  //   });
  // }
}
