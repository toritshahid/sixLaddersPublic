import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SigninCandidateComponent } from './signin-candidate.component';

describe('SigninCandidateComponent', () => {
  let component: SigninCandidateComponent;
  let fixture: ComponentFixture<SigninCandidateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SigninCandidateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninCandidateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
