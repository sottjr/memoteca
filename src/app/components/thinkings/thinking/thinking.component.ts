import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-thinking',
  templateUrl: './thinking.component.html',
  styleUrls: ['./thinking.component.css']
})
export class ThinkingComponent implements OnInit {
  @Input() pensamento = {
    conteudo: 'I love Angular',
    autoria: 'Nay',
    modelo: 'modelo3'
  }

  constructor() { }

  ngOnInit(): void {
  }

  larguraPensamento ():String {
    if (this.pensamento.conteudo.length >= 256){
      return "pensamento-g"
    }
    return "pensamento-p"

  }

}
