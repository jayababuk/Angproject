import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPurchasedBookByEmailComponent } from './all-purchased-book-by-email.component';

describe('AllPurchasedBookByEmailComponent', () => {
  let component: AllPurchasedBookByEmailComponent;
  let fixture: ComponentFixture<AllPurchasedBookByEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllPurchasedBookByEmailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllPurchasedBookByEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
