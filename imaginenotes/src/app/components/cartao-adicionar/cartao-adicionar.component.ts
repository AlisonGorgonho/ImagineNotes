import { Component, OnInit } from '@angular/core';
import { CartaoInterface } from '../../models/cartao';
import { AuthService } from '../../services/auth.service';
import { CartaoService } from '../../services/cartao.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cartao-adicionar',
  templateUrl: './cartao-adicionar.component.html',
  styleUrls: ['./cartao-adicionar.component.css']
})
export class CartaoAdicionarComponent implements OnInit {

  cartao: CartaoInterface = {
   id: "",
   conteudo: "",
   titulo: "",
   cor: "",
   excluido: false,
   fixado: false,
   dataCriacao: "",
   userId: ""
  };

  constructor(
    private authService: AuthService,
    private cartaoService: CartaoService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onBlurSalvarCartao() {
    if(this.cartao.conteudo !== '') {
      this.cartao.dataCriacao = (new Date()).getTime();
      this.authService.getUser().subscribe( user => {
        this.cartao.userId = user.uid;
        this.cartaoService.adicionarCartao(this.cartao);
        this.cartao.conteudo = '';
      });
    }
  }

}
