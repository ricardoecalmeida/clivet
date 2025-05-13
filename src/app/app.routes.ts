import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MarcacoesComponent } from './pages/marcacoes/marcacoes.component';
import { AnimaisComponent } from './pages/animais/animais.component';
import { TutoresComponent } from './pages/tutores/tutores.component';
import { MarcacoesCriarComponent } from './components/marcacoes-criar/marcacoes-criar.component';
import { MarcacoesEditarComponent } from './components/marcacoes-editar/marcacoes-editar.component';
import { MarcacoesEliminarComponent } from './components/marcacoes-eliminar/marcacoes-eliminar.component';
import { AnimaisCriarComponent } from './components/animais-criar/animais-criar.component';
import { AnimaisEditarComponent } from './components/animais-editar/animais-editar.component';
import { AnimaisEliminarComponent } from './components/animais-eliminar/animais-eliminar.component';
import { TutoresCriarComponent } from './components/tutores-criar/tutores-criar.component';
import { TutoresEditarComponent } from './components/tutores-editar/tutores-editar.component';
import { TutoresEliminarComponent } from './components/tutores-eliminar/tutores-eliminar.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
  // HOME
  {
    path: '',
    title: 'CliVet',
    component: HomeComponent
  },
  // NAVBAR
  {
    path: 'navbar',
    title: 'Navbar',
    component: NavbarComponent
  },
  // MARCAÇÕES
  {
    path: 'marcacoes',
    title: 'CliVet: Marcações',
    component: MarcacoesComponent
  },
  {
    path: 'nova-marcacao',
    title: 'CliVet: Nova marcação',
    component: MarcacoesCriarComponent
  },
  {
    path: 'editar-marcacao/:id',
    title: 'CliVet: Editar Marcação',
    component: MarcacoesEditarComponent
  },
  {
    path: 'eliminar-marcacao/:id',
    title: 'CliVet: Eliminar Marcação',
    component: MarcacoesEliminarComponent
  }
  ,
  // ANIMAIS
  {
    path: 'animais',
    title: 'CliVet: Animais',
    component: AnimaisComponent
  },
  {
    path: 'novo-animal',
    title: 'CliVet: Novo animal',
    component: AnimaisCriarComponent
  },
  {
    path: 'editar-animal/:id',
    title: 'CliVet: Editar Animal',
    component: AnimaisEditarComponent
  },
  {
    path: 'eliminar-animal/:id',
    title: 'CliVet: Eliminar Aimal',
    component: AnimaisEliminarComponent
  },
  // TUTORES
  {
    path: 'tutores',
    title: 'CliVet: Tutores',
    component: TutoresComponent
  },
  {
    path: 'novo-tutor',
    title: 'CliVet: Novo tutor',
    component: TutoresCriarComponent
  },
  {
    path: 'editar-tutor/:id',
    title: 'CliVet: Editar Tutor',
    component: TutoresEditarComponent
  },
  {
    path: 'eliminar-tutor/:id',
    title: 'CliVet: Eliminar Tutor',
    component: TutoresEliminarComponent
  },
  // 404
  {
    path: '**',
    title: 'CliVet: 404 - Página não encontrada!',
    component: NotFoundComponent
  },
];
