import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { DisputeMonthService } from '../dispute-month.service';
import { RouterTestingModule } from '@angular/router/testing';
import { MockBackend  } from '@angular/http/testing';
import { Player } from '../../common/player';
import { DISPUTE_MONTHS } from '../../mock-backend/mock-dispute-months';
import { DisputeMonthListComponent } from './dispute-month-list.component';
import { DisputeMonthItemComponent } from './dispute-month-item/dispute-month-item.component';
import { Http, HttpModule, XHRBackend, Response, ResponseOptions } from '@angular/http';

describe('DisputeMonthListComponent', () => {
  let component: DisputeMonthListComponent;
  let fixture: ComponentFixture<DisputeMonthListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisputeMonthListComponent, DisputeMonthItemComponent ],
      imports: [ HttpModule, RouterTestingModule ],
      providers: [
        DisputeMonthService,
        { provide: XHRBackend, useClass: MockBackend }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisputeMonthListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should have an array of dispute months Observable<DisputeMonth>', inject([DisputeMonthService, XHRBackend], (disputeMonthService, mockBackend) => {

    mockBackend.connections.subscribe((connection) => {
      connection.mockRespond(new Response(new ResponseOptions({
        body: JSON.stringify(DISPUTE_MONTHS)
      })));
    });

    disputeMonthService.getDisputeMonths().subscribe((disputeMonths) => {
      expect(disputeMonths.length).toEqual(4);
      expect(disputeMonths[0].name).toEqual("Setembro");
      expect(disputeMonths[0].id).toEqual(4);
      expect(disputeMonths[0].players.length).toEqual(31);
      expect(disputeMonths[0].players[0].name).toEqual("Felipe Martins");
      expect(disputeMonths[0].players[0].team).toEqual("Cearamor Messejana");
      expect(disputeMonths[0].players[0].points).toEqual(132.53);
      expect(disputeMonths[0].players[0].team_symbol).toContain("escudo");
      expect(disputeMonths[0].players[0].details[0].round).toEqual(23);
      expect(disputeMonths[0].players[0].details[0].points).toEqual(55.12);
    });
  }));

  it('setActive(id) must set an DM to active', () => {
    expect(component.active).toBeUndefined();
    component.setActive(2);
    expect(component.active).toEqual(2);
  });

  it('isActive return true first call and after matches the id', () => {
    component.active = null;
    expect(component.isActive(3)).toBeTruthy();
    expect(component.active).toEqual(3);
    expect(component.isActive(1)).toBeFalsy();
    expect(component.isActive(2)).toBeFalsy();
    expect(component.isActive(3)).toBeTruthy();
  });

  it('tag(id) should return pull_id',() => {
    expect(component.tag(13)).toEqual("pills_13");
  });

  it('label(id) should return tab_id',() => {
    expect(component.label(13)).toEqual("tab_13");
  });
});
