import { Component } from '@angular/core';
import { Marcacao } from '../../models/marcacoes';
import { HttpClientModule } from '@angular/common/http';
import { MarcacoesService } from '../../services/marcacoes.service';
import { AnimaisService } from '../../services/animais.service';
import { TutoresService } from '../../services/tutores.service';
import { Subscription } from 'rxjs';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-marcacoes-lista',
  standalone: true,
  imports: [HttpClientModule, RouterLink],
  providers: [MarcacoesService, AnimaisService, TutoresService],
  templateUrl: './marcacoes-lista.component.html',
  styleUrl: './marcacoes-lista.component.scss'
})
export class MarcacoesListaComponent {

  marcacoes?: Marcacao[];
  animais: any[] = [];
  tutores: any[] = [];

  marcacoesSubscription?: Subscription;

  constructor(
    private marcacoesService: MarcacoesService,
    private animaisService: AnimaisService,
    private tutoresService: TutoresService,
  ) { }

  ngOnInit() {
    this.marcacoesSubscription = this.marcacoesService.getAll().subscribe({
      next: (value) => {
        this.marcacoes = value;
      },
      error: (err) => {
        console.error('Erro ao carregar os dados!', err);
      },
    });
    this.animaisService.getAll().subscribe({
      next: (animais) => {
        this.animais = animais;
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

  animalIdNome(animalId: string): string {
    const animal = this.animais?.find(a => a.id === animalId);
    return animal ? animal.nome : '❌'
  }

  tutorIdNome(tutorId: string): string {
    const tutor = this.tutores?.find(a => a.id === tutorId);
    return tutor ? tutor.nome : '❌'
  }

  ngOnDestroy() {
    this.marcacoesSubscription?.unsubscribe();
  }

}
