import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowinvitComponent } from './showinvit.component';

describe('ShowinvitComponent', () => {
  let component: ShowinvitComponent;
  let fixture: ComponentFixture<ShowinvitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowinvitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowinvitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
