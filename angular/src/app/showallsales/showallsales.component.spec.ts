import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowallsalesComponent } from './showallsales.component';

describe('ShowallsalesComponent', () => {
  let component: ShowallsalesComponent;
  let fixture: ComponentFixture<ShowallsalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowallsalesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowallsalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
