import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DataService } from '../../services/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tutores-lista',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './tutores-lista.component.html',
  styleUrl: './tutores-lista.component.scss'
})
export class TutoresListaComponent implements OnInit, OnDestroy {
  tutores: any[] = [];
  animais: any[] = [];
  private dataSubscription?: Subscription;

  constructor(private dataService: DataService) {}

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
    this.tutores = data.tutores || [];
    this.animais = data.animais || [];
  }

  animaisDoTutor(tutorId: string): any[] {
    if (!this.animais || !Array.isArray(this.animais)) return [];
    return this.animais.filter((a: any) => a.tutorId === tutorId);
  }

  contarAnimais(tutorId: string): number {
    return this.animaisDoTutor(tutorId).length;
  }

  addTutor(newTutor: any) {
    const data = this.dataService.getData();
    data.tutores.push(newTutor);
    this.dataService.updateData(data);
  }

  removeTutor(tutorId: string) {
    const data = this.dataService.getData();

    if (this.contarAnimais(tutorId) > 0) {
      alert('Não pode remover tutores com animais associados!');
      return;
    }

    data.tutores = data.tutores.filter((t: any) => t.id !== tutorId);
    this.dataService.updateData(data);
  }

  ngOnDestroy() {
    this.dataSubscription?.unsubscribe();
  }
}
