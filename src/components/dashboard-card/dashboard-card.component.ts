import { Component } from '@angular/core';
import { ColecoesServiceService } from 'src/services/colecoes-service.service';
import { ModelosServiceService } from 'src/services/modelos-service.service';
import { Pipe } from '@angular/core';

@Component({
  selector: 'app-dashboard-card',
  templateUrl: './dashboard-card.component.html',
  styleUrls: ['./dashboard-card.component.scss'],
})
export class DashboardCardComponent {
  data: any[] = [];
  
  numModelos = 0;
  numColecoes = 0;


  ngOnInit() {
    this.colecaoService.getColecoes().subscribe((data: any[]) => {
      this.data = data;
      this.numModelos = data.length;
    });

    this.service.getModelos().subscribe((data: any[]) => {
      this.data = data;
      this.numColecoes = data.length;
    });
  }

  constructor(
    private service: ModelosServiceService,
    private colecaoService: ColecoesServiceService
  ) {}
}
