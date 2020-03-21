import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FRCVisionComponent } from './frcvision.component';

describe('FRCVisionComponent', () => {
  let component: FRCVisionComponent;
  let fixture: ComponentFixture<FRCVisionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FRCVisionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FRCVisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
