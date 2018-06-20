import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartaoOpcoesComponent } from './cartao-opcoes.component';

describe('CartaoOpcoesComponent', () => {
  let component: CartaoOpcoesComponent;
  let fixture: ComponentFixture<CartaoOpcoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartaoOpcoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartaoOpcoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
