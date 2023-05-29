import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouvelleentComponent } from './nouvelleent.component';

describe('NouvelleentComponent', () => {
  let component: NouvelleentComponent;
  let fixture: ComponentFixture<NouvelleentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NouvelleentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NouvelleentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
