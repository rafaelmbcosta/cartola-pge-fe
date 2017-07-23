import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartialItemComponent } from './partial-item.component';

describe('PartialItemComponent', () => {
  let component: PartialItemComponent;
  let fixture: ComponentFixture<PartialItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartialItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartialItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
