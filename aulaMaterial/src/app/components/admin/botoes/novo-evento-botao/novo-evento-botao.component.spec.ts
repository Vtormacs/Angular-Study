import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoEventoBotaoComponent } from './novo-evento-botao.component';

describe('NovoEventoBotaoComponent', () => {
  let component: NovoEventoBotaoComponent;
  let fixture: ComponentFixture<NovoEventoBotaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NovoEventoBotaoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NovoEventoBotaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
