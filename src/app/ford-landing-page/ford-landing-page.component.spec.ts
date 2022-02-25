import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FordLandingPageComponent } from './ford-landing-page.component';

describe('FordLandingPageComponent', () => {
  let component: FordLandingPageComponent;
  let fixture: ComponentFixture<FordLandingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FordLandingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FordLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
