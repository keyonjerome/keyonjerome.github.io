import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachersPetComponent } from './teachers-pet.component';

describe('TeachersPetComponent', () => {
  let component: TeachersPetComponent;
  let fixture: ComponentFixture<TeachersPetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeachersPetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachersPetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
