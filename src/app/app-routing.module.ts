import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardCardComponent } from 'src/components/dashboard-card/dashboard-card.component';
import { HeaderComponent } from 'src/components/header/header.component';
import { SideMenuComponent } from 'src/components/side-menu/side-menu.component';
import { CadastroComponent } from 'src/pages/cadastro/cadastro.component';
import { ColecoesComponent } from 'src/pages/colecoes/colecoes.component';
import { CriarColecoesComponent } from 'src/pages/criar-colecoes/criar-colecoes.component';
import { CriarModelosComponent } from 'src/pages/criar-modelos/criar-modelos.component';
import { DashboardComponent } from 'src/pages/dashboard/dashboard.component';
import { LoginComponent } from 'src/pages/login/login.component';
import { ModelosComponent } from 'src/pages/modelos/modelos.component';
import { RecuperarSenhaComponent } from 'src/pages/recuperar-senha/recuperar-senha.component';
import { AuthGuard } from 'src/security/AuthGuard';
import { EditaColecoesComponent } from 'src/pages/edita-colecoes/edita-colecoes.component';
import { EditaModelosComponent } from 'src/pages/edita-modelos/edita-modelos.component';

const routes: Routes = [
  {
    path: '', component: LoginComponent
  },
  {
    path: 'forgotPassword',
    component: RecuperarSenhaComponent
  },
  {
    path: 'cadastro',
    component: CadastroComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'colecoes',
    component: ColecoesComponent
  },
  {
    path: 'criarColecoes',
    component: CriarColecoesComponent
  },
  {
    path: 'modelos',
    component: ModelosComponent
  },
  {
    path: 'criarModelos',
    component: CriarModelosComponent
  },
  {
    path: 'editaColecoes/:id',
    component: EditaColecoesComponent
  },
  {
    path: 'editaModelos/:id',
    component: EditaModelosComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
