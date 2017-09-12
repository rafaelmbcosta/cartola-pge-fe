import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisputeMonthItemComponent } from './dispute-month-item.component';

describe('DisputeMonthItemComponent', () => {
  let component: DisputeMonthItemComponent;
  let fixture: ComponentFixture<DisputeMonthItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisputeMonthItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisputeMonthItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
