import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllrepairsComponent } from './allrepairs.component';

describe('AllrepairsComponent', () => {
  let component: AllrepairsComponent;
  let fixture: ComponentFixture<AllrepairsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllrepairsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllrepairsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
