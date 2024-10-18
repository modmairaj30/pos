import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportlistdetailComponent } from './reportlistdetail.component';

describe('ReportlistdetailComponent', () => {
  let component: ReportlistdetailComponent;
  let fixture: ComponentFixture<ReportlistdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportlistdetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportlistdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
