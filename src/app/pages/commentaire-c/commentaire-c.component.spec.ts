import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentaireCComponent } from './commentaire-c.component';

describe('CommentaireCComponent', () => {
  let component: CommentaireCComponent;
  let fixture: ComponentFixture<CommentaireCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentaireCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommentaireCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
