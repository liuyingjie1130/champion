import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealjobComponent } from './realjob.component';

describe('RealjobComponent', () => {
  let component: RealjobComponent;
  let fixture: ComponentFixture<RealjobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealjobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealjobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
