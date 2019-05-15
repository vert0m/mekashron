import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DangerCardComponent } from './danger-card.component';

describe('DangerCardComponent', () => {
  let component: DangerCardComponent;
  let fixture: ComponentFixture<DangerCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DangerCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DangerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
