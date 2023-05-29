import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoirquestComponent } from './voirquest.component';

describe('VoirquestComponent', () => {
  let component: VoirquestComponent;
  let fixture: ComponentFixture<VoirquestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoirquestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoirquestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
