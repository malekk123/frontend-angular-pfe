import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigmailComponent } from './configmail.component';

describe('ConfigmailComponent', () => {
  let component: ConfigmailComponent;
  let fixture: ComponentFixture<ConfigmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigmailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfigmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
