import { Component, OnInit, OnDestroy } from '@angular/core';
import { Marcacao } from '../../models/marcacoes';
import { RouterLink } from '@angular/router';
import { DataService } from '../../services/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-marcacoes-lista',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './marcacoes-lista.component.html',
  styleUrl: './marcacoes-lista.component.scss'
})
export class MarcacoesListaComponent implements OnInit, OnDestroy {
  marcacoes: Marcacao[] = [];
  animais: any[] = [];
  tutores: any[] = [];
  private dataSubscription?: Subscription;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.loadLocalData();
    if (this.dataService.dataChanged) {
      this.dataSubscription = this.dataService.dataChanged.subscribe(() => {
        this.loadLocalData();
      });
    }
  }

  private loadLocalData() {
    const data = this.dataService.getData();
    this.marcacoes = data.marcacoes || [];
    this.animais = data.animais || [];
    this.tutores = data.tutores || [];
  }

  animalIdNome(animalId: string): string {
    const animal = this.animais.find(a => a.id === animalId);
    return animal ? animal.nome : '❌';
  }

  tutorIdNome(tutorId: string): string {
    const tutor = this.tutores.find(a => a.id === tutorId);
    return tutor ? tutor.nome : '❌';
  }

  updateMarcacao(updatedMarcacao: Marcacao) {
    const data = this.dataService.getData();
    const index = data.marcacoes.findIndex((m: Marcacao) => m.id === updatedMarcacao.id);

    if (index !== -1) {
      data.marcacoes[index] = updatedMarcacao;
    } else {
      data.marcacoes.push(updatedMarcacao);
    }

    this.dataService.updateData(data);
    this.marcacoes = data.marcacoes;
  }

  removeMarcacao(marcacaoId: string) {
    const data = this.dataService.getData();
    data.marcacoes = data.marcacoes.filter((m: Marcacao) => m.id !== marcacaoId);

    this.dataService.updateData(data);
    this.marcacoes = data.marcacoes;
  }

  formatDataHora(dataHora: string | Date): string[] {
    let dateStr: string;

    if (dataHora instanceof Date) {
      dateStr = dataHora.toISOString();
    } else if (typeof dataHora === 'string') {
      dateStr = dataHora;
    } else {
      return ['', ''];
    }

    const [date, time] = dateStr.split('T');
    const timeWithoutSeconds = time.substring(0, 5);
    return [date, timeWithoutSeconds];
  }

  ngOnDestroy() {
    this.dataSubscription?.unsubscribe();
  }

}
