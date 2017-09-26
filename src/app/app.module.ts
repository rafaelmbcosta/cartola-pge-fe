//Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// For mocking purposes
import {MockBackend} from "@angular/http/testing";
import {BaseRequestOptions} from "@angular/http";
//Components
import { AppComponent } from './app.component';
import { PartialListComponent } from './partial/partial-list/partial-list.component';
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

export function HttpFactory(backend: MockBackend, options: BaseRequestOptions){
  return new Http(backend, options);
}

@NgModule({
  declarations: [
    AppComponent,
    PartialListComponent,
    PartialItemComponent,
    DisputeMonthListComponent,
    LeagueListComponent,
    BattleListComponent,
    SeasonScoreListComponent,
    RulesComponent,
    CurrencyListComponent,
    DisputeMonthItemComponent,
    LeagueItemComponent
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
