import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KechengtailComponent } from './kechengtail.component';

describe('KechengtailComponent', () => {
  let component: KechengtailComponent;
  let fixture: ComponentFixture<KechengtailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KechengtailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KechengtailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
