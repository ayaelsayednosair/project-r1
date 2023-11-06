import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatebarComponent } from './ratebar.component';

describe('RatebarComponent', () => {
  let component: RatebarComponent;
  let fixture: ComponentFixture<RatebarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RatebarComponent]
    });
    fixture = TestBed.createComponent(RatebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
