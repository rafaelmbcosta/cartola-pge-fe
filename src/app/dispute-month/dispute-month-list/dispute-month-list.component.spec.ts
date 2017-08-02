import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisputeMonthListComponent } from './dispute-month-list.component';

describe('DisputeMonthListComponent', () => {
  let component: DisputeMonthListComponent;
  let fixture: ComponentFixture<DisputeMonthListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisputeMonthListComponent ]
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
});
