import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerLadderComponent } from './career-ladder.component';

describe('CareerLadderComponent', () => {
  let component: CareerLadderComponent;
  let fixture: ComponentFixture<CareerLadderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CareerLadderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CareerLadderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
