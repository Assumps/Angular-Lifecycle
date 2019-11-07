import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { childchildComponent } from './childchild.component';

describe('childchildComponent', () => {
  let component: childchildComponent;
  let fixture: ComponentFixture<childchildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ childchildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(childchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
