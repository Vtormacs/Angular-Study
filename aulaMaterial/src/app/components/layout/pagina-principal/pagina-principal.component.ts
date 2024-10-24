import { Component } from '@angular/core';
import { CirculoComponent } from "../../categoria/circulo/circulo.component";
import { EventoslistComponent } from "../../evento/eventoslist/eventoslist.component";
import { RodapeComponent } from "../rodape/rodape.component";
import { MenuComponent } from "../menu/menu.component";

@Component({
  selector: 'app-pagina-principal',
  standalone: true,
  imports: [CirculoComponent, EventoslistComponent, RodapeComponent, MenuComponent],
  templateUrl: './pagina-principal.component.html',
  styleUrl: './pagina-principal.component.scss'
})
export class PaginaPrincipalComponent {

}
