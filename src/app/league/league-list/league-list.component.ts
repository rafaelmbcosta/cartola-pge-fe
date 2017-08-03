import { Component, OnInit } from '@angular/core';
import { League } from '../league';
import { LeagueService } from '../league.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-league-list',
  templateUrl: './league-list.component.html',
  styleUrls: ['./league-list.component.css'],
  providers: [ LeagueService ]
})
export class LeagueListComponent implements OnInit {

  leagues: League[];
  errorMessage: string;

  constructor(
    private leagueService: LeagueService,
    private router: Router
  ) { }

  ngOnInit() {
    let timer = Observable.timer(0, 5*  60*1000)
    timer.subscribe(() => this.getLeagues());
  }

  getLeagues(){
    this.leagueService.getLeagues()
        .subscribe(
          leagues => this.leagues = leagues,
          error => this.errorMessage = <any>error
        );
  }

}
