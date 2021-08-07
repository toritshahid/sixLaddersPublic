import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCareerExplorationComponent } from './new-career-exploration.component';

describe('NewCareerExplorationComponent', () => {
  let component: NewCareerExplorationComponent;
  let fixture: ComponentFixture<NewCareerExplorationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewCareerExplorationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCareerExplorationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
