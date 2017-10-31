import { Component, OnInit } from '@angular/core';
import { PartialService } from '../partial.service';
import { Observable } from 'rxjs/Rx';
import { Partials } from '../partials';
import { Router } from '@angular/router';
import { MockPartialsService } from '../../mock-backend/mock-partials.service';

@Component({
  selector: 'app-partial-list',
  templateUrl: './partial-list.component.html',
  styleUrls: ['./partial-list.component.css'],
  providers: [ PartialService, MockPartialsService ]
})

export class PartialListComponent implements OnInit {
  partials: Partials[];
  errorMessage: string;
  mode = "Observable";
  position = 1;
  constructor(
    private partialService: MockPartialsService,
    private router: Router
  ) {}

  ngOnInit() {
    let timer = Observable.timer(0, 60*1000)
    timer.subscribe(() => this.getPartials());
  }

  getPartials(){
    this.partialService.getPartials()
        .subscribe(
          partials => this.partials = partials,
          error => this.errorMessage = <any>error
        );
  }

  getPartialItem(partials: Partials): void {
    console.log(partials.team_id);
    let link = ['/app-partial-item', partials.team_id];
    this.router.navigate(link);
  }

}
