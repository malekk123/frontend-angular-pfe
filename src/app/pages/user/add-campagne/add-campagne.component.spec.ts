import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCampagneComponent } from './add-campagne.component';

describe('AddCampagneComponent', () => {
  let component: AddCampagneComponent;
  let fixture: ComponentFixture<AddCampagneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCampagneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCampagneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
