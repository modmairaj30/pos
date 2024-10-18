import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BomtransactionhistoryComponent } from './bomtransactionhistory.component';

describe('BomtransactionhistoryComponent', () => {
  let component: BomtransactionhistoryComponent;
  let fixture: ComponentFixture<BomtransactionhistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BomtransactionhistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BomtransactionhistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
