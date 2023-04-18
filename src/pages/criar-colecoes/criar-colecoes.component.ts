import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ColecoesServiceService } from 'src/services/colecoes-service.service';
import { Colecoes } from 'src/common/icolecoes';

@Component({
  selector: 'app-criar-colecoes',
  templateUrl: './criar-colecoes.component.html',
  styleUrls: ['./criar-colecoes.component.scss'],
})
export class CriarColecoesComponent {
  novaColecao!: FormGroup;

  //formulário
  criaNovaColecao() {
    this.novaColecao = this.fb.group({
      nome: ['', Validators.required],
      estacao: ['', Validators.required],
      orcamento: ['', Validators.required],
      responsavel: ['', Validators.required],
      marca: ['', Validators.required],
      anoLancamento: ['', Validators.required],
    });
  }

  //cria coleção com os dados do fomrulário
  async criaColecao() {
    const colecao: Colecoes = this.novaColecao.value;
    await this.service
      .createColecao(colecao)
      .toPromise()
      .then(() => {
        window.alert('Coleção criada com sucesso!');
      })
      .catch((err) => console.log(err));
  }

  goToModelos() {
    this.route.navigate(['/modelos']);
  }
  goToColecoes() {
    this.route.navigate(['/colecoes']);
  }
  goToDashboard() {
    this.route.navigate(['/dashboard']);
  }

  constructor(
    private service: ColecoesServiceService,
    private route: Router,
    private fb: FormBuilder
  ) {
    this.criaNovaColecao();
  }
}
