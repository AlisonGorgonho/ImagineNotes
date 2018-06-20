import { Component, OnInit } from '@angular/core';
import { CartaoService } from '../../services/cartao.service';
import { CartaoInterface } from '../../models/cartao';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-notas-page',
  templateUrl: './notas-page.component.html',
  styleUrls: ['./notas-page.component.css']
})
export class NotasPageComponent implements OnInit {

  cartoes: CartaoInterface[];

  constructor(private cartaoService: CartaoService) { }

  ngOnInit() {  
    this.todosCartoes();
  }

  todosCartoes() {
    this.cartaoService.listarCartoes().subscribe(cartoes => this.cartoes = cartoes);
  }

}
