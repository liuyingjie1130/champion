import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NojobComponent } from './nojob.component';

describe('NojobComponent', () => {
  let component: NojobComponent;
  let fixture: ComponentFixture<NojobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NojobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NojobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
