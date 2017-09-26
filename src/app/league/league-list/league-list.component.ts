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
  active: number;

  setActive(id){
    this.active = id;
  }

  isActive(id){
    if (id == this.active){
      return true;
    }
    if (this.active == null){
      this.active = id
      return true;
    }
  }

  constructor(
    private leagueService: LeagueService,
    private router: Router
  ) { }

  ngOnInit() {
    let timer = Observable.timer(0, 5*  60*1000)
    timer.subscribe(() => this.getLeagues());
  }

  tag(id){
    return "pills_"+id;
  }

  label(id){
    return "tab_"+id
  }

  getLeagues(){
    this.leagueService.getLeagues()
        .subscribe(
          leagues => this.leagues = leagues,
          error => this.errorMessage = <any>error
        );
  }
}
