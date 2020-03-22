import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RBCApplicationComponent } from './rbcapplication.component';

describe('RBCApplicationComponent', () => {
  let component: RBCApplicationComponent;
  let fixture: ComponentFixture<RBCApplicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RBCApplicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RBCApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
