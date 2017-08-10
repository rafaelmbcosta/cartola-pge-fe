import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeasonScoreListComponent } from './season-score-list.component';

describe('SeasonScoreListComponent', () => {
  let component: SeasonScoreListComponent;
  let fixture: ComponentFixture<SeasonScoreListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeasonScoreListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeasonScoreListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
