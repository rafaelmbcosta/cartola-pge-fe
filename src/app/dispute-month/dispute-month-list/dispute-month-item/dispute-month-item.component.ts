import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Player } from '../../../common/player';

@Component({
  selector: '[player]',
  templateUrl: './dispute-month-item.component.html',
  styleUrls: ['./dispute-month-item.component.css']
})
export class DisputeMonthItemComponent implements OnInit {

  showing: boolean;
  @Input() player: Player;
  @Input() i: number;
  @Input() last: boolean;
  @Input() total: number;

  constructor() {
    this.showing = false;
  }

  show(){
    this.showing = !this.showing;
    this.last =  false;
  }

  classSelector(i, tag){
    var awardRange = 3
    if (this.total >= 35){
      awardRange = 4
    }
    if (i <= awardRange ){
      return `${tag}-${i}`;
    }
    return "";
  }

  ngOnInit() {
  }

}
