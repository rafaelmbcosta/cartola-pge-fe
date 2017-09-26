import { Component, OnInit , Input} from '@angular/core';
import { Player } from '../../../common/player';

@Component({
  selector: '[leaguePlayer]',
  templateUrl: './league-item.component.html',
  styleUrls: ['./league-item.component.css']
})
export class LeagueItemComponent implements OnInit {

  showing: boolean;
  @Input() leaguePlayer: Player;
  @Input() i: number;
  @Input() last: boolean;

  constructor() {
    this.showing = false;
  }

  show(){
    this.showing = !this.showing;
    this.last =  false;
  }

  classSelector(i, tag){
    if (i <= 3){
      return `${tag}-${i}`;
    }
    return "";
  }

  detailBackground(points){
    if (points == 3){ return "alert-"; }
    if (points == 0){ return "alert-"; }
  }

  ngOnInit() {
  }

}
