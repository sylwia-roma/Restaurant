import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherServicesSectionComponent } from './other-services-section.component';

describe('OtherServicesSectionComponent', () => {
  let component: OtherServicesSectionComponent;
  let fixture: ComponentFixture<OtherServicesSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherServicesSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtherServicesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
