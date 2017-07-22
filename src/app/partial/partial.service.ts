import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Partials } from './partials';

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
  // getPartial(id: number){
  //   return this.http.get(this.partialsUrl+"/"+id);
  // }
}
