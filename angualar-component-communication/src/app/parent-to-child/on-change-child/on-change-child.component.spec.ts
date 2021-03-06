import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnChangeChildComponent } from './on-change-child.component';

describe('OnChangeChildComponent', () => {
  let component: OnChangeChildComponent;
  let fixture: ComponentFixture<OnChangeChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnChangeChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnChangeChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
