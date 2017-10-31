import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Http , Response, Headers, RequestOptions } from '@angular/http';
import { PartialService } from '../partial.service';
import { MockPartialsService } from '../../mock-backend/mock-partials.service';
import { Observable } from 'rxjs/Rx';
import { Router } from '@angular/router';
import { Partial } from '../partial';

@Component({
  selector: 'app-partial-item',
  templateUrl: './partial-item.component.html',
  styleUrls: ['./partial-item.component.css'],
  providers: [ PartialService, MockPartialsService ]
})
export class PartialItemComponent implements OnInit {
  response: string;
  errorMessage: string;
  id: number;

  constructor(
    private route: ActivatedRoute,
    private http: Http,
    private partialService: MockPartialsService,
    public router: Router
  ) {}

    @Input()
    partials: Partial[];

    ngOnInit() {
      let partialRequest = this.route.params.flatMap(
        (params : Params) => this.partialService.getPartialItens(+params['id'])
      );
      partialRequest.subscribe(response => this.partials = response.json());
    }

}
