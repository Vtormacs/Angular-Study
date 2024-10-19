import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CSSStyleBindingComponent } from './css-style-binding.component';

describe('CSSStyleBindingComponent', () => {
  let component: CSSStyleBindingComponent;
  let fixture: ComponentFixture<CSSStyleBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CSSStyleBindingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CSSStyleBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
