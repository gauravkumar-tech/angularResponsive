import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeveloperswebsiteComponent } from './developerswebsite.component';

describe('DeveloperswebsiteComponent', () => {
  let component: DeveloperswebsiteComponent;
  let fixture: ComponentFixture<DeveloperswebsiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeveloperswebsiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeveloperswebsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
