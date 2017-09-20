import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { DisputeMonthService } from '../dispute-month.service';
import { RouterTestingModule } from '@angular/router/testing';
import { MockBackend  } from '@angular/http/testing';
import { DISPUTE_MONTHS } from '../../mock-backend/mock-dispute-months';
import { DisputeMonthListComponent } from './dispute-month-list.component';
import { Http, HttpModule, XHRBackend, Response, ResponseOptions } from '@angular/http';

describe('DisputeMonthListComponent', () => {
  let component: DisputeMonthListComponent;
  let fixture: ComponentFixture<DisputeMonthListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisputeMonthListComponent ],
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

    disputeMonthService.getCurrencies().subscribe((disputeMonths) => {
      expect(disputeMonths.length).toEqual(4);

    });
  }));
});
