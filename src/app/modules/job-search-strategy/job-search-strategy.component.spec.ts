import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobSearchStrategyComponent } from './job-search-strategy.component';

describe('JobSearchStrategyComponent', () => {
  let component: JobSearchStrategyComponent;
  let fixture: ComponentFixture<JobSearchStrategyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobSearchStrategyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobSearchStrategyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
