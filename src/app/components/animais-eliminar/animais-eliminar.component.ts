import { Component } from '@angular/core';
import { Animais } from '../../models/animais';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AnimaisService } from '../../services/animais.service';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-animais-eliminar',
  standalone: true,
  imports: [HttpClientModule, ReactiveFormsModule, RouterLink, NavbarComponent],
  providers: [AnimaisService],
  templateUrl: './animais-eliminar.component.html',
  styleUrl: './animais-eliminar.component.scss'
})
export class AnimaisEliminarComponent {

  animais?: Animais;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private animaisService: AnimaisService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.animaisService.getById(id).subscribe(result => this.animais = result);
    }
  }

  cancelar(): void {
    this.router.navigate(['/animais']);
  }

  confirmar(): void {
    if (this.animais) {
      this.animaisService.delete(this.animais).subscribe(() => {
        this.router.navigate(['animais']);
      });
    }
  }

}
