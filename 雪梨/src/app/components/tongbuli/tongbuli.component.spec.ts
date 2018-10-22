import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TongbuliComponent } from './tongbuli.component';

describe('TongbuliComponent', () => {
  let component: TongbuliComponent;
  let fixture: ComponentFixture<TongbuliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TongbuliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TongbuliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
