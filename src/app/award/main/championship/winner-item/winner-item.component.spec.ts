import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WinnerItemComponent } from './winner-item.component';

describe('WinnerItemComponent', () => {
  let component: WinnerItemComponent;
  let fixture: ComponentFixture<WinnerItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WinnerItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WinnerItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
