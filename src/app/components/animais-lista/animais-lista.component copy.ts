import { Component } from '@angular/core';
import { Animais } from '../../models/animais';
import { Subscription } from 'rxjs';
import { AnimaisService } from '../../services/animais.service';
import { TutoresService } from '../../services/tutores.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-animais-lista',
  standalone: true,
  imports: [HttpClientModule, RouterLink],
  providers: [AnimaisService, TutoresService],
  templateUrl: './animais-lista.component.html',
  styleUrl: './animais-lista.component.scss'
})
export class AnimaisListaComponent {
  animais?: Animais[];
  tutores: any[] = [];

  animaisSubscription?: Subscription;

  constructor(
    private animaisService: AnimaisService,
    private tutoresService: TutoresService
  ) { }


  ngOnInit() {
    this.animaisSubscription = this.animaisService.getAll().subscribe({
      next: (value) => {
        this.animais = value;
      },
      error: (err) => {
        console.error('Erro ao carregar os dados!', err);
      },
    });
    this.tutoresService.getAll().subscribe({
      next: (tutores) => {
        this.tutores = tutores;
      },
      error: (err) => {
        console.error('Erro ao carregar os dados!', err);
      },
    });
  }

  tutorIdNome(tutorId: string): string {
    const tutor = this.tutores?.find(a => a.id === tutorId);
    return tutor ? tutor.nome : '❌'
  }

  ngOnDestroy() {
    this.animaisSubscription?.unsubscribe();
  }

}
