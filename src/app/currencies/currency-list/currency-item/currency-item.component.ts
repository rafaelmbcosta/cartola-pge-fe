import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Team } from '../../team';

@Component({
  selector: '[team]',
  templateUrl: './currency-item.component.html',
  styleUrls: ['./currency-item.component.css']
})
export class CurrencyItemComponent implements OnInit {


    showing: boolean;
    @Input() team: Team;
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

    differenceColor(diff){
      if (diff > 0){ return "points-1"; }
      if (diff < 0){ return "points-lil-flashlight"; }
    }

    positiveSign(diff){
      if (diff > 0) {
        return "+";
      }
    }

    ngOnInit() {
    }
}
