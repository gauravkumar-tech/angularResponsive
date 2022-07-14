import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaindashbardComponent } from './maindashbard.component';

describe('MaindashbardComponent', () => {
  let component: MaindashbardComponent;
  let fixture: ComponentFixture<MaindashbardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaindashbardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaindashbardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
