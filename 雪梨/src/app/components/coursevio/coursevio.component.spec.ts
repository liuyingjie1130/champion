import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursevioComponent } from './coursevio.component';

describe('CoursevioComponent', () => {
  let component: CoursevioComponent;
  let fixture: ComponentFixture<CoursevioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursevioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursevioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
