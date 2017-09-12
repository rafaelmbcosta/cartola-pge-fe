import { Component, OnInit, Input } from '@angular/core';
import { Player } from '../../../common/player';

@Component({
  selector: '[player]',
  templateUrl: './dispute-month-item.component.html',
  styleUrls: ['./dispute-month-item.component.css']
})
export class DisputeMonthItemComponent implements OnInit {

  @Input() player: Player;
  @Input() i: number;

  constructor() { }

  ngOnInit() {
  }

}
