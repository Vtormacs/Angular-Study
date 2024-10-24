import { Component } from '@angular/core';
import { MenuComponent } from "../menu/menu.component";
import { RouterOutlet } from '@angular/router';
import { RodapeComponent } from "../rodape/rodape.component";
import { CirculoComponent } from "../../categoria/circulo/circulo.component";

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [MenuComponent, RouterOutlet, RodapeComponent, CirculoComponent],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.scss'
})
export class PrincipalComponent {

}
