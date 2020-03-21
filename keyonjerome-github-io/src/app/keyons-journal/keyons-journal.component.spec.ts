import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyonsJournalComponent } from './keyons-journal.component';

describe('KeyonsJournalComponent', () => {
  let component: KeyonsJournalComponent;
  let fixture: ComponentFixture<KeyonsJournalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeyonsJournalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyonsJournalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
