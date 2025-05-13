import { Component } from '@angular/core';
import { AnimaisListaComponent } from "../../components/animais-lista/animais-lista.component";
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-animais',
    standalone: true,
    templateUrl: './animais.component.html',
    styleUrl: './animais.component.scss',
    imports: [AnimaisListaComponent, RouterLink, NavbarComponent]
})
export class AnimaisComponent {

}
