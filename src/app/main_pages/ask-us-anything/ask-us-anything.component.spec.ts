import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AskUsAnythingComponent } from './ask-us-anything.component';

describe('AskUsAnythingComponent', () => {
  let component: AskUsAnythingComponent;
  let fixture: ComponentFixture<AskUsAnythingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AskUsAnythingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AskUsAnythingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
