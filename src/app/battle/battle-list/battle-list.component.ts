import { Component, OnInit } from '@angular/core';
import { Battles } from '../battles';
import { BattlesService } from '../battles.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { MockBattleService } from "../../mock-backend/mock-battle.service";

@Component({
  selector: 'app-battle-list',
  templateUrl: './battle-list.component.html',
  styleUrls: ['./battle-list.component.css'],
  providers: [ BattlesService, MockBattleService ]
})
export class BattleListComponent implements OnInit {

  battles: Battles[];
  errorMessage: string;

  constructor(
    private battlesService: BattlesService,
    private router: Router
  ) { }

  ngOnInit() {
    let timer = Observable.timer(0, 5*  60*1000)
    timer.subscribe(() => this.getBattles());
  }

  getBattles(){
    this.battlesService.getBattles()
      .subscribe(
        battles => this.battles = battles,
        error => this.errorMessage = <any>error
      );
  }

}
