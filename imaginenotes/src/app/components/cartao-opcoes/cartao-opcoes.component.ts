import { Component, OnInit, Input } from '@angular/core';
import { CartaoService } from '../../services/cartao.service';
import { Router } from '@angular/router';
//import * as $ from 'jquery';

@Component({
  selector: 'app-cartao-opcoes',
  templateUrl: './cartao-opcoes.component.html',
  styleUrls: ['./cartao-opcoes.component.css']
})
export class CartaoOpcoesComponent implements OnInit {

  @Input() id: string;

  constructor(private cartaoService: CartaoService, private router: Router) { }

  ngOnInit() { }

    onClickDeletarCartao(id) {
      this.cartaoService.pegarCartao(id).subscribe((cartao) => {
        this.cartaoService.deletarCartao(cartao);
      });
    }

    onClickMudarCor(cor, id) {
      this.cartaoService.pegarCartao(id).subscribe((cartao) => {
        cartao.cor = cor;
        this.cartaoService.alterarCartao(cartao);
      });
    }    

}
