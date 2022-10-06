import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-thinkings',
  templateUrl: './get-thinkings.component.html',
  styleUrls: ['./get-thinkings.component.css']
})
export class GetThinkingsComponent implements OnInit {

  listaPensamentos = [
    {
      conteudo: 'Passo informações para o componente filho',
      autoria: 'Componente pai',
      modelo: 'modelo3'
    },
    {
      conteudo: 'Minha propriedade é decorada com @Input()',
      autoria: 'Componente filho',
      modelo: 'modelo2'
    },
    {
      conteudo: 'Mussum Ipsum, cacilds vidis litro abertis. Posuere libero varius Mussum Ipsum, cacilds vidis litro abertis. Posuere libero varius.',
      autoria: 'Mussum Ipsum',
      modelo: 'modelo1'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
