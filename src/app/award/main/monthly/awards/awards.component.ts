import { Component, OnInit, Input } from '@angular/core';
import { Award } from '../../award';

@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.css']
})
export class AwardsComponent implements OnInit {

  @Input() awards: Award[];

  constructor() { }

  ngOnInit() {
  }

  formatType(type){
    type = type.replace("golden", "Rodada premiada ");
    type = type.replace("month", "Mês de disputa");
    type = type.replace("league", "Copa da liga");
    type = type.replace("currency", "Patrimônio");
    return type;
  }

}
