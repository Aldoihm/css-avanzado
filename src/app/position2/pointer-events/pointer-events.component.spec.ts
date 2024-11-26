import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PointerEventsComponent } from './pointer-events.component';

describe('PointerEventsComponent', () => {
  let component: PointerEventsComponent;
  let fixture: ComponentFixture<PointerEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PointerEventsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PointerEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
