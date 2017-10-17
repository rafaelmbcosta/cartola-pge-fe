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
  active: number;

  constructor(
    private awardService: AwardService,
    private router: Router,
  ) { }

  ngOnInit() {
    let timer = Observable.timer(0, 5*  60*1000)
    timer.subscribe(() => this.getMonths());
  }

  isActive(id){
    if (id == this.active){
      return true;
    }
    if (this.active == null){
      this.active = id
      return true;
    }
  }

  setActive(id){
    this.active = id;
  }

  tag(id){
    return "pills_"+id;
  }

  label(id){
    return "tab_"+id
  }

  getMonths(){
    this.awardService.getMonths()
        .subscribe(
          months => this.months = months,
          error => this.errorMessage = <any>error
        );
  }
}
