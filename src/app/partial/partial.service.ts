import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Partials } from './partials';
import { Partial } from './partial';

@Injectable()
export class PartialService {
  private partialsUrl = 'http://cartola-pge-api.herokuapp.com/api/v1/partials';

  constructor(
    private http: Http,
  ) {}

  getPartials(): Observable<Partials[]> {
    return this.http.get(this.partialsUrl)
                      .map((response: Response) => <Partials[]>response.json())
  }

  getPartialItens(id: number){
    console.log(id);
    return this.http.get(this.partialsUrl+"/"+id);
  }
}
