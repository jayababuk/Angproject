import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckBookByPaymentIdComponent } from './check-book-by-payment-id.component';

describe('CheckBookByPaymentIdComponent', () => {
  let component: CheckBookByPaymentIdComponent;
  let fixture: ComponentFixture<CheckBookByPaymentIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckBookByPaymentIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckBookByPaymentIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
