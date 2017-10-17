import { Component, OnInit, Input } from '@angular/core';
import { Winner } from '../../winner';

@Component({
  selector: 'app-month-winner-item',
  templateUrl: './month-winner-item.component.html',
  styleUrls: ['./month-winner-item.component.css']
})
export class MonthWinnerItemComponent implements OnInit {

  @Input() winner: Winner;

  constructor() { }

  ngOnInit() {
  }

}
