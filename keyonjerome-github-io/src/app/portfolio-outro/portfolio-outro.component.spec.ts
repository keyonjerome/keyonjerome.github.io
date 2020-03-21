import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioOutroComponent } from './portfolio-outro.component';

describe('PortfolioOutroComponent', () => {
  let component: PortfolioOutroComponent;
  let fixture: ComponentFixture<PortfolioOutroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioOutroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioOutroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
