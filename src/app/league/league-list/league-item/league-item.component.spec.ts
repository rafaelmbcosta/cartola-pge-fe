import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeagueItemComponent } from './league-item.component';

describe('LeagueItemComponent', () => {
  let component: LeagueItemComponent;
  let fixture: ComponentFixture<LeagueItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeagueItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeagueItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
