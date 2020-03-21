import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpartanRoboticsComponent } from './spartan-robotics.component';

describe('SpartanRoboticsComponent', () => {
  let component: SpartanRoboticsComponent;
  let fixture: ComponentFixture<SpartanRoboticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpartanRoboticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpartanRoboticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
