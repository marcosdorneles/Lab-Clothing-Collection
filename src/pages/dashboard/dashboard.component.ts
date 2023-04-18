import { Component } from '@angular/core';
import { ColecoesServiceService } from 'src/services/colecoes-service.service';
import { Colecoes } from 'src/common/icolecoes';
import { Router } from '@angular/router';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  colecoes!: Colecoes[];

  ngOnInit(): void {
    this.service.getColecoes().subscribe((data: Colecoes[]) => {
      this.colecoes = data;
    });
  }

  goToDashboard(){
    this.route.navigate(['dashboard'])
  }

  goToColecoes(){
    this.route.navigate(['colecoes'])
  }

  goToModelos(){
    this.route.navigate(['modelos'])
  }


  constructor(private service: ColecoesServiceService, private route: Router){}
}
