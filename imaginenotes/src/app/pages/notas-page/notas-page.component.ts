import { Component, OnInit } from '@angular/core';
import { CartaoComponent } from './../../components/cartao/cartao.component'

@Component({
  selector: 'app-notas-page',
  templateUrl: './notas-page.component.html',
  styleUrls: ['./notas-page.component.css']
})
export class NotasPageComponent implements OnInit {

  cartoes: CartaoComponent[] = [
    {titulo: "Card 1", descricao: "Desc 1", cor: 'vermelho'},
    {titulo: "Card 2", descricao: "Desc 2", cor: 'amarelo'},
    {titulo: "Card 3", descricao: "Desc 3", cor: 'verde'},
    {titulo: "Card 3", descricao: "Desc 3", cor: ''}
  ];

  constructor() { }

  ngOnInit() { }

}
