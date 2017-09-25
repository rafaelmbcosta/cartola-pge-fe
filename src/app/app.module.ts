//Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
//Components
import { AppComponent } from './app.component';
import { PartialListComponent } from './partial/partial-list/partial-list.component';
//Everything else
import { Http, HttpModule, RequestOptions } from '@angular/http';
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
    NgbModule.forRoot(),
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  providers: [ PartialService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
