import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestednumberComponent } from './suggestednumber.component';

describe('SuggestednumberComponent', () => {
  let component: SuggestednumberComponent;
  let fixture: ComponentFixture<SuggestednumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuggestednumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuggestednumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
