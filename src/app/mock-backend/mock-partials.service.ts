import { Injectable} from "@angular/core";
import { Http, Response, ResponseOptions} from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Partials } from '../partial/partials';
import { Partial } from '../partial/partial';
import { PARTIALS } from './mock-partials';
import { PARTIAL } from './mock-partial';
import { MockBackend } from '@angular/http/testing';

@Injectable()
export class MockPartialsService {
  private http: Http;

  getPartials(): Observable<Partials[]>{
    return Observable.of(PARTIALS);
  }

  getPartialItens(id: number){
    return Observable.of(new Response(new ResponseOptions({
      body: JSON.stringify(PARTIAL)
    })))
  }
}
