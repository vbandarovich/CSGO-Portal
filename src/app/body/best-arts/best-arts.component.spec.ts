/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BestArtsComponent } from './best-arts.component';

describe('BestArtsComponent', () => {
  let component: BestArtsComponent;
  let fixture: ComponentFixture<BestArtsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BestArtsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BestArtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
