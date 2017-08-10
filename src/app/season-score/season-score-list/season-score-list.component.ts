import { Component, OnInit } from '@angular/core';
import { SeasonScoreService } from '../season-score.service';
import { SeasonScore } from '../season-score';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-season-score-list',
  templateUrl: './season-score-list.component.html',
  styleUrls: ['./season-score-list.component.css'],
  providers: [ SeasonScoreService ]
})
export class SeasonScoreListComponent implements OnInit {
  seasons: SeasonScore[];
  errorMessage: string;

  constructor(
    private seasonScoreService: SeasonScoreService
  ) { }

  ngOnInit() {
    let timer = Observable.timer(0, 5* 60*1000)
    timer.subscribe(() => this.getSeasonScores());
  }

  getSeasonScores(){
    this.seasonScoreService.getSeasonScores()
        .subscribe(
          seasons => this.seasons = seasons,
          error => this.errorMessage = <any>error
        );
  }

}
