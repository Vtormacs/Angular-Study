import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventoDetailsAdminComponent } from './evento-details-admin.component';

describe('EventoDetailsAdminComponent', () => {
  let component: EventoDetailsAdminComponent;
  let fixture: ComponentFixture<EventoDetailsAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventoDetailsAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventoDetailsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
