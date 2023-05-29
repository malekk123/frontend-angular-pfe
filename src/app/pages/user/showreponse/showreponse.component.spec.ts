import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowreponseComponent } from './showreponse.component';

describe('ShowreponseComponent', () => {
  let component: ShowreponseComponent;
  let fixture: ComponentFixture<ShowreponseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowreponseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowreponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
