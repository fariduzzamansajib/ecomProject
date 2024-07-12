import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactioninfoaddComponent } from './transactioninfoadd.component';

describe('TransactioninfoaddComponent', () => {
  let component: TransactioninfoaddComponent;
  let fixture: ComponentFixture<TransactioninfoaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactioninfoaddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransactioninfoaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
