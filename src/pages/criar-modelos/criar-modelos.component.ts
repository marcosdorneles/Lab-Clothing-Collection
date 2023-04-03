import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Modelos } from 'src/common/imodelos';
import { ModelosServiceService } from 'src/services/modelos-service.service';

@Component({
  selector: 'app-criar-modelos',
  templateUrl: './criar-modelos.component.html',
  styleUrls: ['./criar-modelos.component.scss']
})
export class CriarModelosComponent {

novoModelo!:FormGroup

//formulário
formModelo() {
  this.novoModelo = this.fb.group({
    nome:['', Validators.required],
    colecao:['', Validators.required],
    bordado:['', Validators.required],
    tipo:['', Validators.required],
    responsavel:['', Validators.required],
    estampa:['', Validators.required]
  })
  }

  async criaModelo() {
    const modelo: Modelos = this.novoModelo.value;
    await this.service
      .createModelo(modelo)
      .toPromise()
      .then(() => {
        window.alert('Coleção criada com sucesso!')
      })
      .catch((err) => console.log(err));
  }

  goToModelos() {
    this.route.navigate(['/modelos'])
  }
  goToColecoes() {
    this.route.navigate(['/colecoes'])
  }
  goToDashboard() {
    this.route.navigate(['/dashboard'])
  }


  constructor(private service: ModelosServiceService, private route: Router, private fb:FormBuilder){
    this.formModelo()
  }
}


