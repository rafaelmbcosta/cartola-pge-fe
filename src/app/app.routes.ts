// Import our dependencies
import { Routes } from '@angular/router';
// import { Home } from './home';
import { PartialListComponent } from './partial/partial-list/partial-list.component';
import { PartialItemComponent } from './partial/partial-item/partial-item.component';
// Define which component should be loaded based on the current URL
export const routes: Routes = [
  { path: '', component: PartialListComponent },
  { path: 'app-partial-list', component: PartialListComponent },
  { path: 'app-partial-item/:id', component: PartialItemComponent }
];
