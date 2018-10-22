import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunitytailComponent } from './communitytail.component';

describe('CommunitytailComponent', () => {
  let component: CommunitytailComponent;
  let fixture: ComponentFixture<CommunitytailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommunitytailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunitytailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
