import { Component, OnInit } from '@angular/core';
import { DisputeMonthService } from '../dispute-month.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import { DisputeMonth } from '../dispute-month'

@Component({
  selector: 'app-dispute-month-list',
  templateUrl: './dispute-month-list.component.html',
  styleUrls: ['./dispute-month-list.component.css'],
  providers: [ DisputeMonthService]
})
export class DisputeMonthListComponent implements OnInit {
  months: DisputeMonth[];
  errorMessage: string;

  constructor(
    private disputeMonthService: DisputeMonthService,
    private router: Router
  ) { }

  ngOnInit() {
    let timer = Observable.timer(0, 5*  60*1000)
    timer.subscribe(() => this.getDisputeMonths());
  }

  getDisputeMonths(){
    this.disputeMonthService.getDisputeMonths()
        .subscribe(
          months => this.months = months,
          error => this.errorMessage = <any>error
        );
  }
}
