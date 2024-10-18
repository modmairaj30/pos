import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BomtransactionsentryComponent } from './bomtransactionsentry.component';

describe('BomtransactionsentryComponent', () => {
  let component: BomtransactionsentryComponent;
  let fixture: ComponentFixture<BomtransactionsentryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BomtransactionsentryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BomtransactionsentryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
