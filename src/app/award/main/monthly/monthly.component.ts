import { Component, OnInit } from '@angular/core';
import { Month } from './month';
import { Router } from '@angular/router';
import { AwardService } from '../award.service';
import { Observable } from 'rxjs/Rx';
import { MockAwardService } from '../../../mock-backend/mock-award.service';


@Component({
  selector: 'app-monthly',
  templateUrl: './monthly.component.html',
  styleUrls: ['./monthly.component.css'],
  providers: [ AwardService, MockAwardService ]
})
export class MonthlyComponent implements OnInit {
  months: Month[];
  errorMessage: string;

  constructor(
    private awardService: MockAwardService,
    private router: Router,
  ) { }

  ngOnInit() {
    let timer = Observable.timer(0, 5*  60*1000)
    timer.subscribe(() => this.getMonths());
  }

  getMonths(){
    this.awardService.getMonths()
        .subscribe(
          months => this.months = months,
          error => this.errorMessage = <any>error
        );
  }
}
