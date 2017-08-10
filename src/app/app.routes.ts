// Import our dependencies
import { Routes } from '@angular/router';
// import { Home } from './home';
import { PartialListComponent } from './partial/partial-list/partial-list.component';
import { PartialItemComponent } from './partial/partial-item/partial-item.component';
import { DisputeMonthListComponent } from './dispute-month/dispute-month-list/dispute-month-list.component';
import { LeagueListComponent } from './league/league-list/league-list.component';
import { BattleListComponent } from './battle/battle-list/battle-list.component';
import { SeasonScoreListComponent} from './season-score/season-score-list/season-score-list.component';
// Define which component should be loaded based on the current URL
export const routes: Routes = [
  { path: '', component: DisputeMonthListComponent },
  { path: 'app-partial-list', component: PartialListComponent },
  { path: 'app-partial-item/:id', component: PartialItemComponent },
  { path: 'app-dispute-month-list', component: DisputeMonthListComponent },
  { path: 'app-league-list', component: LeagueListComponent },
  { path: 'app-battle-list', component: BattleListComponent },
  { path: 'app-season-score-list', component: SeasonScoreListComponent }
];
