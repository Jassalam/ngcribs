import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CribLisitngComponent } from './crib-lisitng.component';

describe('CribLisitngComponent', () => {
  let component: CribLisitngComponent;
  let fixture: ComponentFixture<CribLisitngComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CribLisitngComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CribLisitngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
