import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchbyinvoiceComponent } from './searchbyinvoice.component';

describe('SearchbyinvoiceComponent', () => {
  let component: SearchbyinvoiceComponent;
  let fixture: ComponentFixture<SearchbyinvoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchbyinvoiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchbyinvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
