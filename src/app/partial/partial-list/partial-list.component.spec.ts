import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartialListComponent } from './partial-list.component';

describe('PartialListComponent', () => {
  let component: PartialListComponent;
  let fixture: ComponentFixture<PartialListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartialListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartialListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
