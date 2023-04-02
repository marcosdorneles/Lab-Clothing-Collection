import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Colecoes } from 'src/common/icolecoes';
import { ColecoesServiceService } from 'src/services/colecoes-service.service';

@Component({
  selector: 'app-colecoes',
  templateUrl: './colecoes.component.html',
  styleUrls: ['./colecoes.component.scss']
})
export class ColecoesComponent {

  colecoes!: Colecoes[];

  ngOnInit() {
    this.service.getColecoes().subscribe((data: Colecoes[]) => {
      this.colecoes = data;
    });
  }

  goToDashboard(){
    this.route.navigate(['/dashboard'])
  }

  goToColecoes(){
    this.route.navigate(['/colecoes'])
  }

  goToModelos(){
    this.route.navigate(['/modelos'])
  }

  goToCriarColecoes(){
    this.route.navigate(['/criarColecoes'])
  }

  constructor(private service: ColecoesServiceService, private route: Router){}
}
