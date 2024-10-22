import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventosdetailsComponent } from './eventosdetails.component';

describe('EventosdetailsComponent', () => {
  let component: EventosdetailsComponent;
  let fixture: ComponentFixture<EventosdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventosdetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventosdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
