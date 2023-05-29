import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RapportdetaillComponent } from './rapportdetaill.component';

describe('RapportdetaillComponent', () => {
  let component: RapportdetaillComponent;
  let fixture: ComponentFixture<RapportdetaillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RapportdetaillComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RapportdetaillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
