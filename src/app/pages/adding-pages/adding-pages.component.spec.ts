import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddingPagesComponent } from './adding-pages.component';

describe('AddingPagesComponent', () => {
  let component: AddingPagesComponent;
  let fixture: ComponentFixture<AddingPagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddingPagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddingPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
