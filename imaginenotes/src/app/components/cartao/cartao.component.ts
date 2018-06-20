import { Component, OnInit, Input } from '@angular/core';
import { CartaoService } from '../../services/cartao.service';

@Component({
  selector: 'app-cartao',
  templateUrl: './cartao.component.html',
  styleUrls: ['./cartao.component.css']
})
export class CartaoComponent implements OnInit {

  @Input() titulo: string;
  @Input() descricao: string;
  @Input() cor: string;
  @Input() id: string;
  showOptions: boolean = false;
  

  constructor(private cartaoService: CartaoService) { }

  ngOnInit() {
  }

  onBlurAlterarCartao(id, conteudo) {
    this.cartaoService.pegarCartao(id).subscribe((cartao) => {
      cartao.conteudo = conteudo;
      this.cartaoService.alterarCartao(cartao);
    });
  }

}
