import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnMoreSectionComponent } from './learn-more-section.component';

describe('LearnMoreSectionComponent', () => {
  let component: LearnMoreSectionComponent;
  let fixture: ComponentFixture<LearnMoreSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LearnMoreSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnMoreSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
