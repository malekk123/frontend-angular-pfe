import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCampagneComponent } from './update-campagne.component';

describe('UpdateCampagneComponent', () => {
  let component: UpdateCampagneComponent;
  let fixture: ComponentFixture<UpdateCampagneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateCampagneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateCampagneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
