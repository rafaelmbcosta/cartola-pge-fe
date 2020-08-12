//Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// For mocking purposes
import {MockBackend} from "@angular/http/testing";
import {BaseRequestOptions} from "@angular/http";
//Components
import { AppComponent } from './app.component';
//Everything else
import { Http, HttpModule, RequestOptions } from '@angular/http';
// Services
import { DisputeMonthService } from './dispute-month/dispute-month.service';
import { PartialService } from './partial/partial.service';
import { routes } from './app.routes';
import { PartialItemComponent } from './partial/partial-item/partial-item.component';
import { DisputeMonthListComponent } from './dispute-month/dispute-month-list/dispute-month-list.component';
import { LeagueListComponent } from './league/league-list/league-list.component';
import { BattleListComponent } from './battle/battle-list/battle-list.component';
import { SeasonScoreListComponent } from './season-score/season-score-list/season-score-list.component';
import { RulesComponent } from './rules/rules.component';
import { CurrencyListComponent } from './currencies/currency-list/currency-list.component';
import { DisputeMonthItemComponent } from './dispute-month/dispute-month-list/dispute-month-item/dispute-month-item.component';
import { LeagueItemComponent } from './league/league-list/league-item/league-item.component';
import { MainComponent } from './award/main/main.component';
import { ChampionshipComponent } from './award/main/championship/championship.component';
import { MonthlyComponent } from './award/main/monthly/monthly.component';
import { WinnerItemComponent } from './award/main/championship/winner-item/winner-item.component';
import { MonthWinnerItemComponent } from './award/main/monthly/month-winner-item/month-winner-item.component';
import { AwardsComponent } from './award/main/monthly/awards/awards.component';
import { CurrencyItemComponent } from './currencies/currency-list/currency-item/currency-item.component';

export function HttpFactory(backend: MockBackend, options: BaseRequestOptions){
  return new Http(backend, options);
}

@NgModule({
  declarations: [
    AppComponent,
    PartialItemComponent,
    DisputeMonthListComponent,
    LeagueListComponent,
    BattleListComponent,
    SeasonScoreListComponent,
    RulesComponent,
    CurrencyListComponent,
    DisputeMonthItemComponent,
    LeagueItemComponent,
    MainComponent,
    ChampionshipComponent,
    MonthlyComponent,
    WinnerItemComponent,
    AwardsComponent,
    MonthWinnerItemComponent,
    CurrencyItemComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes, {
      useHash: true
    }),
  ],
  providers: [
    PartialService,
    DisputeMonthService,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
