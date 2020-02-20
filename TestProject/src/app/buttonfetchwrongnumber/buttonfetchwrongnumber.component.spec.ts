import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonfetchwrongnumberComponent } from './buttonfetchwrongnumber.component';

describe('ButtonfetchwrongnumberComponent', () => {
  let component: ButtonfetchwrongnumberComponent;
  let fixture: ComponentFixture<ButtonfetchwrongnumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonfetchwrongnumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonfetchwrongnumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
