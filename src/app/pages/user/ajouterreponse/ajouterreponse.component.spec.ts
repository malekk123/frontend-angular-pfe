import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterreponseComponent } from './ajouterreponse.component';

describe('AjouterreponseComponent', () => {
  let component: AjouterreponseComponent;
  let fixture: ComponentFixture<AjouterreponseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjouterreponseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AjouterreponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
