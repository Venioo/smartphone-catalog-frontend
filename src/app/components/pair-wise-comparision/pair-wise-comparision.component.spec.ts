import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PairWiseComparisionComponent } from './pair-wise-comparision.component';

describe('PairWiseComparisionComponent', () => {
  let component: PairWiseComparisionComponent;
  let fixture: ComponentFixture<PairWiseComparisionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PairWiseComparisionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PairWiseComparisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
