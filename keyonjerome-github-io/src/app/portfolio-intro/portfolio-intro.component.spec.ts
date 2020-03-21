import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioIntroComponent } from './portfolio-intro.component';

describe('PortfolioIntroComponent', () => {
  let component: PortfolioIntroComponent;
  let fixture: ComponentFixture<PortfolioIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
