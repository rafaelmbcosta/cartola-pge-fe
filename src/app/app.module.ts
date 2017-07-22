import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PartialListComponent } from './partial/partial-list/partial-list.component';
import { Http, HttpModule, RequestOptions } from '@angular/http';
import { AppComponent } from './app.component';
import { PartialService } from './partial/partial.service';

@NgModule({
  declarations: [
    AppComponent,
    PartialListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    NgbModule.forRoot()
  ],
  providers: [ PartialService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
