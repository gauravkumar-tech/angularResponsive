import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepperTwoComponent } from './stepper-two.component';

describe('StepperTwoComponent', () => {
  let component: StepperTwoComponent;
  let fixture: ComponentFixture<StepperTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepperTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepperTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
