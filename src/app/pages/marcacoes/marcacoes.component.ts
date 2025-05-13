import { Component } from '@angular/core';
import { MarcacoesListaComponent } from "../../components/marcacoes-lista/marcacoes-lista.component";
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-marcacoes',
    standalone: true,
    templateUrl: './marcacoes.component.html',
    styleUrl: './marcacoes.component.scss',
    imports: [MarcacoesListaComponent, RouterLink, NavbarComponent]
})
export class MarcacoesComponent {

}
