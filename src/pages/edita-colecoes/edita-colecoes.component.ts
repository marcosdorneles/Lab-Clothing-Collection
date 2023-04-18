import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Colecoes } from 'src/common/icolecoes';
import { ColecoesServiceService } from 'src/services/colecoes-service.service';

@Component({
  selector: 'app-edita-colecoes',
  templateUrl: './edita-colecoes.component.html',
  styleUrls: ['./edita-colecoes.component.scss']
})
export class EditaColecoesComponent {


colecaoAtualizada!: FormGroup

colecaoEditavel() {
  this.colecaoAtualizada = this.fb.group({
    nome: ['', Validators.required],
    estacao: ['', Validators.required],
    orcamento: ['', Validators.required],
    responsavel: ['', Validators.required],
    marca: ['', Validators.required],
    anoLancamento: ['', Validators.required],
  });
}

 async editaColecao(){
  const colecao: Colecoes = this.colecaoAtualizada.value;
  const id = await this.service.atualizarColecao(colecao);
   await this.service.atualizarColecao(colecao)
    .toPromise()
    .then(() => {
      window.alert('Coleção atualizada com sucesso!')
    })
    .catch((err) => console.log(err))
}




goToDashboard() {
this.route.navigate(['dashboard'])
}
goToModelos() {
  this.route.navigate(['modelos'])
}
goToColecoes() {
  this.route.navigate(['colecoes'])
}

constructor(private service:ColecoesServiceService,
  private route: Router,
  private fb: FormBuilder){
    this.colecaoEditavel()
  }
}
