import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardCardComponent } from 'src/components/dashboard-card/dashboard-card.component';
import { HeaderComponent } from 'src/components/header/header.component';
import { SideMenuComponent } from 'src/components/side-menu/side-menu.component';
import { CadastroComponent } from 'src/pages/cadastro/cadastro.component';
import { DashboardComponent } from 'src/pages/dashboard/dashboard.component';
import { LoginComponent } from 'src/pages/login/login.component';
import { RecuperarSenhaComponent } from 'src/pages/recuperar-senha/recuperar-senha.component';
import { AuthGuard } from 'src/security/AuthGuard';

const routes: Routes = [
  {
    path:'', component: LoginComponent
  },
  {
    path:'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'forgotPassword',
    component: RecuperarSenhaComponent
  },
  {
    path:'cadastro',
    component:CadastroComponent
  },
  {
    path:'dashboardCard',
    component:DashboardCardComponent
  },
  {
    path:'sideMenu',
    component:SideMenuComponent
  },
  {
    path:'header',
    component:HeaderComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
