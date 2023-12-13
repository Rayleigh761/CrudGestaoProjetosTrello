import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projetoCrud';

  menus : any [] = [
    {descricao: 'Projetos', rota: ''},
    {descricao: 'Produtos', rota: 'produtos'}  
    //{descricao: 'Entradas', rota: 'entradas'}
  ]


}
