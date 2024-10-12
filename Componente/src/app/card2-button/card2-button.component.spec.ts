import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Card2ButtonComponent } from './card2-button.component';

describe('Card2ButtonComponent', () => {
  let component: Card2ButtonComponent;
  let fixture: ComponentFixture<Card2ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Card2ButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Card2ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
