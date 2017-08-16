import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpedientesClientesComponent } from './expedientes-clientes.component';

describe('ExpedientesClientesComponent', () => {
  let component: ExpedientesClientesComponent;
  let fixture: ComponentFixture<ExpedientesClientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpedientesClientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpedientesClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
