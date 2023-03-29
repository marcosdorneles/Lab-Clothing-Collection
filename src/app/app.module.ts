import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroComponent } from 'src/pages/cadastro/cadastro.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from 'src/pages/login/login.component';
import { AuthGuard } from 'src/security/AuthGuard';
import { RecuperarSenhaComponent } from 'src/pages/recuperar-senha/recuperar-senha.component';
import { DashboardCardComponent } from 'src/components/dashboard-card/dashboard-card.component';


@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    LoginComponent,
    RecuperarSenhaComponent,
    DashboardCardComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule

  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
