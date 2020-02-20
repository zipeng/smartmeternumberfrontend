import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputwrongnumberComponent } from './inputwrongnumber.component';

describe('InputwrongnumberComponent', () => {
  let component: InputwrongnumberComponent;
  let fixture: ComponentFixture<InputwrongnumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputwrongnumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputwrongnumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
