import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotdepasseoubComponent } from './motdepasseoub.component';

describe('MotdepasseoubComponent', () => {
  let component: MotdepasseoubComponent;
  let fixture: ComponentFixture<MotdepasseoubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotdepasseoubComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MotdepasseoubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
