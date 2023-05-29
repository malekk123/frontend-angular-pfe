import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewQuizzesComponent } from './view-quizzes.component';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
describe('ViewQuizzesComponent', () => {
  let component: ViewQuizzesComponent;
  let fixture: ComponentFixture<ViewQuizzesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewQuizzesComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ]

    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewQuizzesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
