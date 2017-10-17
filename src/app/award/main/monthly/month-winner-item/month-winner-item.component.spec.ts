import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthWinnerItemComponent } from './month-winner-item.component';

describe('MonthWinnerItemComponent', () => {
  let component: MonthWinnerItemComponent;
  let fixture: ComponentFixture<MonthWinnerItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthWinnerItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthWinnerItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
