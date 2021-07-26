import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrerCoachingComponent } from './carrer-coaching.component';

describe('CarrerCoachingComponent', () => {
  let component: CarrerCoachingComponent;
  let fixture: ComponentFixture<CarrerCoachingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarrerCoachingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrerCoachingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
