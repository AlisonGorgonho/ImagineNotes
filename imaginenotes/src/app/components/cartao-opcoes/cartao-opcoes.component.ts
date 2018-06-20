import { Component, OnInit } from '@angular/core';
//import * as $ from 'jquery';

@Component({
  selector: 'app-cartao-opcoes',
  templateUrl: './cartao-opcoes.component.html',
  styleUrls: ['./cartao-opcoes.component.css']
})
export class CartaoOpcoesComponent implements OnInit {

  constructor() { }

  ngOnInit() { }
    
    // $('.selecionar-cor').click(function () {
    //   console.log('aaaa');
    // });

    onClickMudarCor(cor) {
      console.log(cor);
    }
    

}
