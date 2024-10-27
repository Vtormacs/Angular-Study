import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaEventosAdminComponent } from './lista-eventos-admin.component';

describe('ListaEventosAdminComponent', () => {
  let component: ListaEventosAdminComponent;
  let fixture: ComponentFixture<ListaEventosAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaEventosAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaEventosAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
