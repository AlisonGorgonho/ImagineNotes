import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cartao',
  templateUrl: './cartao.component.html',
  styleUrls: ['./cartao.component.css']
})
export class CartaoComponent implements OnInit {

  @Input() titulo: string;
  @Input() descricao: string;
  @Input() cor: string;
  showOptions: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
