import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BomtransactionsdetailComponent } from './bomtransactionsdetail.component';

describe('BomtransactionsdetailComponent', () => {
  let component: BomtransactionsdetailComponent;
  let fixture: ComponentFixture<BomtransactionsdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BomtransactionsdetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BomtransactionsdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
