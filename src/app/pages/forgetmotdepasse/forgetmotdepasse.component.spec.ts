import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgetmotdepasseComponent } from './forgetmotdepasse.component';

describe('ForgetmotdepasseComponent', () => {
  let component: ForgetmotdepasseComponent;
  let fixture: ComponentFixture<ForgetmotdepasseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgetmotdepasseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForgetmotdepasseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
