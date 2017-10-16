import { Component, OnInit } from '@angular/core';
import { Championship } from './championship';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { AwardService } from '../award.service';
import { MockAwardService } from '../../../mock-backend/mock-award.service';

@Component({
  selector: 'app-championship',
  templateUrl: './championship.component.html',
  styleUrls: ['./championship.component.css'],
  providers: [ AwardService, MockAwardService ]
})

export class ChampionshipComponent implements OnInit {
  championship: Championship;
  errorMessage: string;

  constructor(
    private awardService: MockAwardService,
    private router: Router,
  ) {}

  ngOnInit() {
    let timer = Observable.timer(0, 5*  60*1000)
    timer.subscribe(() => this.getChampionship());
  }

  getChampionship(){
    this.awardService.getChampionship()
        .subscribe(
          championship => this.championship = championship,
          error => this.errorMessage = <any>error
        );
  }

}
