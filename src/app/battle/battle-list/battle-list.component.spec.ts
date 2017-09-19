import { async, ComponentFixture, TestBed, fakeAsync, inject } from '@angular/core/testing';
import { BattleListComponent } from './battle-list.component';
import { BattlesService } from '../battles.service';
import { BATTLES } from "../../mock-backend/mock-battles";
import { Http, HttpModule, XHRBackend, Response, ResponseOptions } from '@angular/http';
import { MockBackend  } from '@angular/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Battles } from '../battles';

describe('BattleListComponent', () => {
  let component: BattleListComponent;
  let fixture: ComponentFixture<BattleListComponent>;
  let battles: Battles[];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BattleListComponent ],
      imports: [ HttpModule, RouterTestingModule ],
      providers: [
        BattlesService,
        { provide: XHRBackend, useClass: MockBackend }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BattleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('getBattles should return battles', inject([BattlesService, XHRBackend], (battlesService, mockBackend) => {

    mockBackend.connections.subscribe((connection) => {
      connection.mockRespond(new Response(new ResponseOptions({
        body: JSON.stringify(BATTLES)
      })));
    });

    battlesService.getBattles().subscribe((battles) => {
      component.getBattles();
      expect(battles.length).toBe(23);
      expect(battles[0].round).toEqual(23);
      expect(battles[0].battles[0].id).toEqual(356);
      expect(battles[0].battles[0].first_win).toEqual(false);
      expect(battles[0].battles[0].first_points).toEqual(0.0);
      expect(battles[0].battles[0].draw).toEqual(true);
      expect(battles[1].round).toEqual(22);
      expect(battles[2].round).toEqual(21);
      expect(battles[3].round).toEqual(20);
    });
  }));
});
