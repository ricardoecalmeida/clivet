import { Component } from '@angular/core';
import { TutoresListaComponent } from "../../components/tutores-lista/tutores-lista.component";
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-tutores',
    standalone: true,
    templateUrl: './tutores.component.html',
    styleUrl: './tutores.component.scss',
    imports: [TutoresListaComponent, RouterLink, NavbarComponent]
})
export class TutoresComponent {

}
