import { Component } from '@angular/core';
import { Tutores } from '../../models/tutores';
import { Subscription } from 'rxjs';
import { TutoresService } from '../../services/tutores.service';
import { AnimaisService } from '../../services/animais.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterLink } from '@angular/router';
import { Animais } from '../../models/animais';


@Component({
  selector: 'app-tutores-lista',
  standalone: true,
  imports: [HttpClientModule, RouterLink],
  providers: [TutoresService, AnimaisService],
  templateUrl: './tutores-lista.component.html',
  styleUrl: './tutores-lista.component.scss'
})
export class TutoresListaComponent {

  tutores?: Tutores[];
  animais: Animais[] = [];

  tutoresSubscription?: Subscription;

  constructor(
    private tutoresService: TutoresService,
    private animaisService: AnimaisService
  ) { }

  ngOnInit() {
    this.tutoresSubscription = this.tutoresService.getAll().subscribe({
      next: (value) => {
        this.tutores = value;
      },
      error: (err) => {
        console.error('Erro ao carregar os dados!', err);
      },
    });

    this.animaisService.getAll().subscribe({
      next: (value) => {
        this.animais = value;
      },
      error: (err) => {
        console.error('Erro ao carregar os animais!', err);
      },
    });
  }

  ngOnDestroy() {
    this.tutoresSubscription?.unsubscribe();
  }

}
