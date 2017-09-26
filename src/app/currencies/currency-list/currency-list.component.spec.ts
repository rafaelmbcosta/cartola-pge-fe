import { async, ComponentFixture, TestBed,  inject } from '@angular/core/testing';
import { CURRENCIES } from '../../mock-backend/mock-currencies';
import { Currency } from '../currency';
import { CurrencyService } from '../currency.service';
import { CurrencyListComponent } from './currency-list.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MockBackend  } from '@angular/http/testing';
import { Http, HttpModule, XHRBackend, Response, ResponseOptions } from '@angular/http';

describe('CurrencyListComponent', () => {
  let component: CurrencyListComponent;
  let fixture: ComponentFixture<CurrencyListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrencyListComponent ],
      imports: [ HttpModule, RouterTestingModule ],
      providers: [
        CurrencyService,
        { provide: XHRBackend, useClass: MockBackend }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('getCurrencies must obtain an Observable<Currency>', inject([CurrencyService, XHRBackend], (currencyService, mockBackend) => {

    mockBackend.connections.subscribe((connection) => {
      connection.mockRespond(new Response(new ResponseOptions({
        body: JSON.stringify(CURRENCIES)
      })));
    });

    currencyService.getCurrencies().subscribe((currencies) => {
      expect(currencies.length).toEqual(4);
      expect(currencies[0].name).toEqual("Setembro");
      expect(currencies[0].id).toEqual(4);
      expect(currencies[0].teams[0].name).toEqual("Valério Central F. C");
      expect(currencies[0].teams[0].player).toEqual("Bruno Dias");
      expect(currencies[0].teams[0].difference).toEqual(13.790000000000001);
      expect(currencies[0].teams[0].details.length).toEqual(2);
      expect(currencies[0].teams[0].details[0].value).toEqual(254.23);
      expect(currencies[0].teams[0].details[0].difference).toEqual(8.56);
      expect(currencies[0].teams[0].details[0].round).toEqual(23);
    });
  }));

  it('detailBackground(value) should return the right CSS class', () => {
    expect(component.detailBackground(0)).toEqual(undefined);
    expect(component.detailBackground(1)).toEqual("alert-success");
    expect(component.detailBackground(-1)).toEqual("alert-danger");
  });

  it('differenceColor(value) should match the right CSS class', () => {
    expect(component.differenceColor(0)).toEqual(undefined);
    expect(component.differenceColor(1)).toEqual("text-success");
    expect(component.differenceColor(-1)).toEqual("text-danger");
  });

  it('positiveSign(diff) returns + if positive', () => {
    expect(component.positiveSign(-5)).toEqual(undefined);
    expect(component.positiveSign(0)).toEqual(undefined);
    expect(component.positiveSign(3)).toEqual('+');
  });
});
