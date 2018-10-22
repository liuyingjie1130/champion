import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseliComponent } from './courseli.component';

describe('CourseliComponent', () => {
  let component: CourseliComponent;
  let fixture: ComponentFixture<CourseliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
