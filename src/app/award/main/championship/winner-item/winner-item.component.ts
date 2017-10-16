import { Component, OnInit, Input } from '@angular/core';
import { Winner } from '../../winner';

@Component({
  selector: 'app-winner-item',
  templateUrl: './winner-item.component.html',
  styleUrls: ['./winner-item.component.css']
})
export class WinnerItemComponent implements OnInit {

  @Input() winners: Winner[];

  constructor() { }

  ngOnInit() {
  }

}
