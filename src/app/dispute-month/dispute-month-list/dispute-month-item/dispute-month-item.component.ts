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

  ngOnInit() {
  }

}
