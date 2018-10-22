import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WanjiejobComponent } from './wanjiejob.component';

describe('WanjiejobComponent', () => {
  let component: WanjiejobComponent;
  let fixture: ComponentFixture<WanjiejobComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WanjiejobComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WanjiejobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
