import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { LeagueService } from '../league.service';
import { LeagueListComponent } from './league-list.component';
import { LEAGUES } from '../../mock-backend/mock-leagues';
import { MockBackend  } from '@angular/http/testing';
import { League } from '../league';
import { RouterTestingModule } from '@angular/router/testing';
import { Http, HttpModule, XHRBackend, Response, ResponseOptions } from '@angular/http';

describe('LeagueListComponent', () => {
  let component: LeagueListComponent;
  let fixture: ComponentFixture<LeagueListComponent>;
  let leagues: League[];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeagueListComponent ],
      imports: [ HttpModule, RouterTestingModule ],
      providers: [
        LeagueService,
        { provide: XHRBackend, useClass: MockBackend }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeagueListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('detailBackground(points) should return success or danger', () => {
    expect(component.detailBackground(1)).toBeUndefined();
    // expect(component.detailBackground())
  });

  it('should return an Observable<Leagues>', inject([LeagueService, XHRBackend], ( leagueService, mockBackend) => {
    mockBackend.connections.subscribe((connection) => {
      connection.mockRespond(new Response(new ResponseOptions({
        body: JSON.stringify(LEAGUES)
      })));
    });

    leagueService.getLeagues().subscribe((disputeMonths) => {
      expect(disputeMonths[0].id).toEqual(4);
      expect(disputeMonths[0].players.length).toEqual(31);
      expect(disputeMonths[0].players[0].name).toEqual("Daniel Oliveira");
      expect(disputeMonths[0].players[0].team).toEqual("PIEDADE FCF");
      expect(disputeMonths[0].players[0].points).toEqual(6);
      expect(disputeMonths[0].players[0].team_symbol).toContain("escudo");
      expect(disputeMonths[0].players[0].details[0].round).toEqual(23);
      expect(disputeMonths[0].players[0].details[0].points).toEqual(3);
      expect(disputeMonths[0].players[0].details[0].diff_points).toEqual(14.0);
      expect(disputeMonths[0].players[0].details[0].opponent).toEqual("simple man");
    });
  }));
});
