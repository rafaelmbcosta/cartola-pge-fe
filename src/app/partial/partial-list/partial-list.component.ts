import { Component, OnInit } from '@angular/core';
import { PartialService } from '../partial.service';
import { Observable } from 'rxjs/Rx';
import { Partials } from '../partials';

@Component({
  selector: 'app-partial-list',
  templateUrl: './partial-list.component.html',
  styleUrls: ['./partial-list.component.css'],
  providers: [ PartialService]
})
export class PartialListComponent implements OnInit {
  //
  partials: Partials[];
  errorMessage: string;
  mode = "Observable";
  position = 1;
  //
  constructor(
    private partialService: PartialService

  ) {}
  //
  ngOnInit() {
    let timer = Observable.timer(0, 5000)
    timer.subscribe(() => this.getPartials());
  }
  //
  getPartials(){
    this.partialService.getPartials()
        .subscribe(
          partials => this.partials = partials,
          error => this.errorMessage = <any>error
        );
  }

  // goToShow(season: Season): void {
  //   let link = ['/seasons', season.id];
  //   this.router.navigate(link);
  // }

}
