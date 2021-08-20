import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeLinkedinREviewComponent } from './resume-linkedin-review.component';

describe('ResumeLinkedinREviewComponent', () => {
  let component: ResumeLinkedinREviewComponent;
  let fixture: ComponentFixture<ResumeLinkedinREviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumeLinkedinREviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeLinkedinREviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
