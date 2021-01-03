import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LivelaunchComponent } from './livelaunch.component';

describe('LivelaunchComponent', () => {
  let component: LivelaunchComponent;
  let fixture: ComponentFixture<LivelaunchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LivelaunchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LivelaunchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
