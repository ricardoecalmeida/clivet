import { Component, OnInit, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DataService } from '../../services/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-animais-lista',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './animais-lista.component.html',
  styleUrl: './animais-lista.component.scss'
})
export class AnimaisListaComponent implements OnInit, OnDestroy {
  animais: any[] = [];
  tutores: any[] = [];
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
    this.animais = data.animais || [];
    this.tutores = data.tutores || [];
  }

  tutorIdNome(tutorId: string): string {
    if (!this.tutores || !Array.isArray(this.tutores)) return '❌';
    const tutor = this.tutores.find((t: any) => t.id === tutorId);
    return tutor ? tutor.nome : '❌ Tutor não encontrado';
  }

  addAnimal(newAnimal: any) {
    const data = this.dataService.getData();
    data.animais.push(newAnimal);
    this.dataService.updateData(data);
  }

  removeAnimal(animalId: string) {
    const data = this.dataService.getData();
    data.animais = data.animais.filter((a: any) => a.id !== animalId);
    this.dataService.updateData(data);
  }

  ngOnDestroy() {
    this.dataSubscription?.unsubscribe();
  }
}
