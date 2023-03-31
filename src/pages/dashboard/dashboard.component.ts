import { Component } from '@angular/core';
import { ColecoesServiceService } from 'src/services/colecoes-service.service';
import { Colecoes } from 'src/common/icolecoes';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  colecoes!: Colecoes[];

  ngOnInit(): void {
    this.listarColecoes();
  }

  listarColecoes() {
    this.service.getColecoes().subscribe((data: Colecoes[]) => {
      this.colecoes = data;
    });
  }

  constructor(private service: ColecoesServiceService){}
}
