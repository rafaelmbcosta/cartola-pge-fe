// Import our dependencies
import { Routes } from '@angular/router';
// import { Home } from './home';
import { DisputeMonthListComponent } from './dispute-month/dispute-month-list/dispute-month-list.component';
import { LeagueListComponent } from './league/league-list/league-list.component';
import { BattleListComponent } from './battle/battle-list/battle-list.component';
import { SeasonScoreListComponent} from './season-score/season-score-list/season-score-list.component';
import { RulesComponent } from './rules/rules.component';
import { MainComponent } from './award/main/main.component';
import { CurrencyListComponent } from './currencies/currency-list/currency-list.component';
// Define which component should be loaded based on the current URL
export const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'app-award', component: MainComponent },
  { path: 'app-dispute-month-list', component: DisputeMonthListComponent },
  { path: 'app-league-list', component: LeagueListComponent },
  { path: 'app-battle-list', component: BattleListComponent },
  { path: 'app-season-score-list', component: SeasonScoreListComponent },
  { path: 'app-currency-list', component: CurrencyListComponent },
  { path: 'app-rules', component: RulesComponent }
];
