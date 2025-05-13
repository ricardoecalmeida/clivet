import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AnimaisService } from '../../services/animais.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-animais-criar',
  standalone: true,
  imports: [HttpClientModule, ReactiveFormsModule, NavbarComponent],
  providers: [AnimaisService],
  templateUrl: './animais-criar.component.html',
  styleUrl: './animais-criar.component.scss'
})
export class AnimaisCriarComponent {

  formularioAnimais: FormGroup = new FormGroup({
    nome: new FormControl('', Validators.required),
    especie: new FormControl('', Validators.required),
    raca: new FormControl('', Validators.required),
    sexo: new FormControl('', Validators.required),
    dataNascimento: new FormControl('', Validators.required),
    tutorId: new FormControl('', Validators.required),
  });
  criarSubscription?: Subscription;
  submitted: boolean = false;

  constructor(
    private animaisService: AnimaisService,
    private router: Router
  ) { }

  handleSubmit(): void {
    this.submitted = true;

    if (this.formularioAnimais.valid) {
      this.criarSubscription = this.animaisService
        .create({
          nome: this.formularioAnimais.controls['nome'].value,
          especie: this.formularioAnimais.controls['especie'].value,
          raca: this.formularioAnimais.controls['raca'].value,
          sexo: this.formularioAnimais.controls['sexo'].value,
          dataNascimento: this.formularioAnimais.controls['dataNascimento'].value,
          tutorId: this.formularioAnimais.controls['tutorId'].value,

        })
        .subscribe({
          next: (value) => {
            this.router.navigate(['/animais']);
          },
          error: (err) => {
            console.error('Erro ao criar uma nova marcação!', err);
          },
        });
    }
  }

  ngOnDestroy() {
    this.criarSubscription?.unsubscribe();
  }

  voltar(): void {
    this.router.navigate(['animais']);
  }

}
