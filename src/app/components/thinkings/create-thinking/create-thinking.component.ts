import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-thinking',
  templateUrl: './create-thinking.component.html',
  styleUrls: ['./create-thinking.component.css']
})
export class CreateThinkingComponent implements OnInit {

  pensamento = {
    id: '1',
    conteudo: 'Aprendendo Angular',
    autoria: 'Dev',
    modelo: 'modelo1'
  }

  constructor() { }

  ngOnInit(): void {
  }

  criarPensamento() {
    alert("Novo pensamento criado!")
  }

  cancelar() {
    alert("Ação cancelada!")
  }

}
