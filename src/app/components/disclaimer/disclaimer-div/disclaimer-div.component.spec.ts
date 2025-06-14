import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisclaimerDivComponent } from './disclaimer-div.component';

describe('DisclaimerDivComponent', () => {
  let component: DisclaimerDivComponent;
  let fixture: ComponentFixture<DisclaimerDivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisclaimerDivComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisclaimerDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
