import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BomtransactionsComponent } from './bomtransactions.component';

describe('BomtransactionsComponent', () => {
  let component: BomtransactionsComponent;
  let fixture: ComponentFixture<BomtransactionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BomtransactionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BomtransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
